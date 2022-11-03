import * as utils from "./utils.js";

let canvas;
let ctx;
const markerTextSize = 50;
let redBtn;
let greenBtn;
let blueBtn;
let wordElement;
let curWord = { text: 'Loading...', color: 'black' };
let totalScore = 0;
let startTime;
let newTime;
let matchingTotal = 0;
let unmatchingTotal = 0;
let matchingAttemptNum = 0;
let unmatchingAttemptNum = 0;
let unmatchingScore = 0;
let wordsLeft = utils.numRepetitions.stroop;
const maxWaitTime = 2500;

const init = () => {
    if(localStorage.getItem('vgz-addapp-stroopdata-effect')) {
        document.querySelector('#task-done-title').classList.remove('hidden');
        document.querySelector('#task-done-msg').classList.remove('hidden');
        document.querySelector('#start-btn').classList.add('hidden');
        document.querySelector('#instructions').classList.add('hidden');
        return;
    }
    let handedness;
    if(!localStorage.getItem('vgz-addapp-handedness')) {
        document.querySelector('#survey-msg').classList.remove('hidden');
        document.querySelector('#start-btn').classList.add('hidden');
        document.querySelector('#instructions').classList.add('hidden');
        //handedness = 'right';
        return;
    }
    else handedness = localStorage.getItem('vgz-addapp-handedness');

    redBtn = document.createElement('button');
    redBtn.innerHTML = "R";
    redBtn.id = "red-button";
    redBtn.classList.add('hidden');
    redBtn.classList.add('stroop-button');
    redBtn.onclick = () => { checkColor('red') };

    greenBtn = document.createElement('button');
    greenBtn.innerHTML = "G";
    greenBtn.id = "green-button";
    greenBtn.classList.add('hidden');
    greenBtn.classList.add('stroop-button');
    greenBtn.onclick = () => { checkColor('green') };
    
    blueBtn = document.createElement('button');
    blueBtn.innerHTML = "B";
    blueBtn.id = "blue-button";
    blueBtn.classList.add('hidden');
    blueBtn.classList.add('stroop-button');
    blueBtn.onclick = () => { checkColor('blue') };

    wordElement = document.querySelector('#stroop-word');
    wordElement.classList.add('hidden');

    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 360;
    canvas.height = 360;

    // add elements to doc
    document.querySelector('#messages').appendChild(blueBtn);
    document.querySelector('#messages').appendChild(greenBtn);
    document.querySelector('#messages').appendChild(redBtn);
    //if(handedness === 'left') {
    //    document.querySelector('#messages').appendChild(redBtn);
    //    document.querySelector('#messages').appendChild(greenBtn);
    //    document.querySelector('#messages').appendChild(blueBtn);
    //}
    //else {
    //    document.querySelector('#messages').appendChild(blueBtn);
    //    document.querySelector('#messages').appendChild(greenBtn);
    //    document.querySelector('#messages').appendChild(redBtn);
    //}

    document.querySelector('#start-btn').onclick = () => { document.querySelector('#content').appendChild(canvas); startStroop() };
}

const getRandColor = () => {
    const colors = ['red', 'green', 'blue'];
    return colors[Math.floor(Math.random()*3)];
}

const endTask = () => {
    redBtn.classList.add('hidden');
    greenBtn.classList.add('hidden');
    blueBtn.classList.add('hidden');
    document.querySelector('#stroop-word').classList.add('hidden');
    const endMsg = document.createElement('p');
    endMsg.innerHTML = `The task is now complete. Your total score is ${totalScore*20}.`;
    document.querySelector('#messages').appendChild(endMsg);
    document.querySelector('#instructions').classList.add('hidden');

    const stroopEffect = ((unmatchingTotal/unmatchingAttemptNum)-(matchingTotal/matchingAttemptNum))/1000;

    localStorage.setItem('vgz-addapp-stroopdata-accurates', totalScore);
    localStorage.setItem('vgz-addapp-stroopdata-unmatchaccurates', unmatchingScore);
    localStorage.setItem('vgz-addapp-stroopdata-effect', stroopEffect);
    localStorage.setItem('vgz-addapp-stroopdata-unmatchtime', unmatchingTotal);
    localStorage.setItem('vgz-addapp-stroopdata-matchtime', matchingTotal);
    localStorage.setItem('vgz-addapp-stroopdata-unmatchnum', unmatchingAttemptNum);
    localStorage.setItem('vgz-addapp-stroopdata-matchnum', matchingAttemptNum);
    utils.addPoints(totalScore*20);
    return;
}


const checkColor = (input) => {
    // don't take input if no word is on screen
    if(curWord === '+') return;
    newTime = new Date();
    if(curWord.color === input) totalScore++; // this is for shop points
    if(curWord.color === curWord.text) {
        matchingTotal += newTime - startTime;
        matchingAttemptNum++;
    }
    else {
        unmatchingTotal += newTime - startTime;
        unmatchingAttemptNum++;
        if(curWord.color === input) unmatchingScore++; // this is for incongruent answer accuracy
    }
    waitForWord();
}

const startStroop = () => {
    // hide start button
    document.querySelector('#start-btn').classList.add('hidden');

    // unhide buttons and word
    redBtn.classList.remove('hidden');
    redBtn.classList.remove('hidden');
    greenBtn.classList.remove('hidden');
    blueBtn.classList.remove('hidden');
    //document.querySelector('#stroop-word').classList.remove('hidden');
    
    waitForWord();
}

const waitForWord = () => {
    curWord.text = '+';
    curWord.color = 'black';
    drawMarker();
    let randWait = Math.floor(Math.random()*maxWaitTime);
    setTimeout(makeNewWord, randWait);
}

const makeNewWord = () => {
    startTime = new Date();
    if(wordsLeft === 0) endTask();
    wordsLeft--;
    curWord.text = getRandColor();
    curWord.color = getRandColor();
    drawMarker(curWord.text, curWord.color);
    //wordElement.innerHTML = curWord.text;
    //wordElement.style = `color:${curWord.color}`;
}

// draws marker on canvas
const drawMarker = (m="+", c="black") => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawText(m, canvas.width/2, canvas.height/2, c);
}

const drawText = (text,x,y,color="black",style=`${markerTextSize}px Open Dyslexic`) => {
    ctx.save();
    ctx.font = style;
    ctx.fillStyle = color;
    ctx.textAlign = "center"; 
    ctx.fillText(text, x, y);
    ctx.restore();
}

window.onload = init;

