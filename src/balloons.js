// This task was made to the specifications here: https://www.impulsivity.org/measurement/bart/

import * as utils from "./utils.js";

let totalScore = 0;
const emptyBalloon = { currentPopNum:0, currentValue:0 };
let curBalloon = emptyBalloon;
let poppedBalloonsNum = 0;
let balloonsLeft = utils.numRepetitions.balloon-1;

let balloonImg;
let ohNoMsg;
let newBlnMsg;
let valueLabel;
let balloonsLeftLabel;

const makeNewBalloon = () => {
    if(balloonsLeft === 0)
    {
        document.querySelector('#content').innerHTML = `The task is now complete. Your final score is ${totalScore}, which can now be spent at the shop.`;
        localStorage.setItem('vgz-addapp-balloondata', totalScore);
        localStorage.setItem('vgz-addapp-balloondata-popnum', poppedBalloonsNum);
        localStorage.setItem('vgz-addapp-shoppoints', Math.floor(localStorage.getItem('vgz-addapp-shoppoints')) + totalScore);
        return;
    }
    balloonsLeft--;
    balloonsLeftLabel.innerHTML = `Balloons left: ${balloonsLeft}`;
    curBalloon.currentValue = 0;
    let rand = Math.floor(Math.random() * 3);
    switch(rand)
    {
        case 0: curBalloon.currentPopNum = 8; break;
        case 1: curBalloon.currentPopNum = 32; break;
        case 2: curBalloon.currentPopNum = 128; break;
    }
    balloonImg.style = `width:5%`;
    valueLabel.innerHTML = `Balloon value: ${0}`;
    document.querySelector('#pump-button').classList.remove('hidden');   
    document.querySelector('#sell-button').classList.remove('hidden');
    newBlnMsg.classList.remove('hidden');
    balloonImg.classList.remove('hidden');
    
    ohNoMsg.classList.add('hidden');
    document.querySelector('#make-button').classList.add('hidden');
}

const explodeBalloon = () => {
    poppedBalloonsNum++;
    document.querySelector('#pump-button').classList.add('hidden');   
    document.querySelector('#sell-button').classList.add('hidden');
    newBlnMsg.classList.add('hidden');
    balloonImg.classList.add('hidden');

    ohNoMsg.classList.remove('hidden');
    document.querySelector('#make-button').classList.remove('hidden');
}

const pumpBalloon = () => {
    const rand = Math.floor(Math.random() * curBalloon.currentPopNum) + 1;
    if(rand === curBalloon.currentPopNum) explodeBalloon();
    else {
        curBalloon.currentValue += 5;
        valueLabel.innerHTML = `Balloon value: ${curBalloon.currentValue}`;
        balloonImg.style = `width:${(curBalloon.currentValue/2)+5}%`;
    }
}

const init = () => {
    utils.setAllShopSettings();
    if(localStorage.getItem('vgz-addapp-balloondata')) {
        document.querySelector('#task-done-title').classList.remove('hidden');
        document.querySelector('#task-done-msg').classList.remove('hidden');
        return;
    }

    // create messages
    newBlnMsg = document.createElement('p');
    newBlnMsg.innerHTML = "The more you pump your balloons, the more they will be worth. You can sell your current balloon at any time, but if it pops, you lose that balloon.";
    
    ohNoMsg = document.createElement('p');
    ohNoMsg.innerHTML = "Yikes! Your balloon popped.";
    ohNoMsg.classList.add('hidden');
    
    // create labels
    const scoreLabel = document.createElement('p');
    scoreLabel.innerHTML = `Point total: ${0}`;
    
    valueLabel = document.createElement('p');
    valueLabel.innerHTML = `Balloon value: ${0}`;

    balloonsLeftLabel = document.createElement('p');
    balloonsLeftLabel.innerHTML = `Balloons left: ${balloonsLeft}`;

    // create image
    balloonImg = document.createElement('img');
    balloonImg.src = `assets/balloon.png`;
    balloonImg.style = `width:5%`;

    // create buttons
    const pumpButton = document.createElement('button');
    pumpButton.innerHTML = "Pump Balloon";
    pumpButton.id = "pump-button";
    pumpButton.onclick = pumpBalloon;
    const sellButton = document.createElement('button');
    sellButton.innerHTML = "Sell Balloon";
    sellButton.id = "sell-button";
    sellButton.onclick = () => {
        totalScore += curBalloon.currentValue;
        curBalloon = emptyBalloon;
        scoreLabel.innerHTML = `Point total: ${totalScore}`;
        makeNewBalloon();
    };
    const makeButton = document.createElement('button');
    makeButton.innerHTML = "Make New Balloon";
    makeButton.id = "make-button";
    makeButton.classList.add('hidden');
    makeButton.onclick = makeNewBalloon;

    // add elements to doc
    document.querySelector('#messages').appendChild(newBlnMsg);
    document.querySelector('#messages').appendChild(ohNoMsg);
    document.querySelector('#messages').appendChild(scoreLabel);
    document.querySelector('#messages').appendChild(valueLabel);
    document.querySelector('#messages').appendChild(balloonsLeftLabel);
    document.querySelector('#buttons').appendChild(pumpButton);
    document.querySelector('#buttons').appendChild(sellButton);
    document.querySelector('#buttons').appendChild(makeButton);
    document.querySelector('#balloon').appendChild(balloonImg);
}

window.onload = init;