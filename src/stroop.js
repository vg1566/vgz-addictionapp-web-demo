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
let wordsLeft = 29;

const getRandColor = () => {
    const colors = ['red', 'green', 'blue'];
    return colors[Math.floor(Math.random()*3)];
}

const makeNewWord = () => {
    startTime = new Date();
    if(wordsLeft === 0) {
        redBtn.classList.add('hidden');
        redBtn.classList.add('hidden');
        greenBtn.classList.add('hidden');
        blueBtn.classList.add('hidden');
        document.querySelector('#stroop-word').classList.add('hidden');
        const endMsg = document.createElement('p');
        endMsg.innerHTML = `The task has ended. Your total score is ${totalScore*20}. Stroop effect: ${(unmatchingTotal-matchingTotal)/1000}`;
        document.querySelector('#messages').appendChild(endMsg);

        localStorage.setItem('vgz-addapp-stroopdata', (unmatchingTotal-matchingTotal)/1000);
        localStorage.setItem('vgz-addapp-shoppoints', Math.floor(localStorage.getItem('vgz-addapp-shoppoints')) + totalScore*20);
        return;
    }
    wordsLeft--;
    curWord.text = getRandColor();
    curWord.color = getRandColor();
    wordElement.innerHTML = curWord.text;
    wordElement.style = `color:${curWord.color}`;
}

const checkColor = (input) => {
    newTime = new Date();
    if(curWord.color === input) totalScore++; // this is for shop points
    if(curWord.color === curWord.text) {
        matchingTotal += newTime - startTime;
    }
    else {
        unmatchingTotal += newTime - startTime;
    }
    makeNewWord();
}

const startStroop = () => {
    // hide start button
    document.querySelector('#start-btn').classList.add('hidden');

    // unhide buttons and word
    redBtn.classList.remove('hidden');
    redBtn.classList.remove('hidden');
    greenBtn.classList.remove('hidden');
    blueBtn.classList.remove('hidden');
    document.querySelector('#stroop-word').classList.remove('hidden');
    
    makeNewWord();
}

const init = () => {
    if(localStorage.getItem('vgz-addapp-balloondata')) {
        document.querySelector('#task-done-title').classList.remove('hidden');
        document.querySelector('#task-done-msg').classList.remove('hidden');
        document.querySelector('#start-btn').classList.add('hidden');
        return;
    }
    let handedness;
    if(!localStorage.getItem('vgz-addapp-handedness')) {
        document.querySelector('#survey-msg').classList.remove('hidden');
        return;
    }
    else handedness = localStorage.getItem('vgz-addapp-handedness');

    redBtn = document.createElement('button');
    redBtn.innerHTML = "R";
    redBtn.id = "red-button";
    redBtn.classList.add('hidden');
    redBtn.onclick = () => { checkColor('red') };

    greenBtn = document.createElement('button');
    greenBtn.innerHTML = "G";
    greenBtn.id = "green-button";
    greenBtn.classList.add('hidden');
    greenBtn.onclick = () => { checkColor('green') };
    
    blueBtn = document.createElement('button');
    blueBtn.innerHTML = "B";
    blueBtn.id = "blue-button";
    blueBtn.classList.add('hidden');
    blueBtn.onclick = () => { checkColor('blue') };

    wordElement = document.querySelector('#stroop-word');

    // add elements to doc
    // if left-handed swap buttons
    if(handedness === 'left') {
        document.querySelector('#messages').appendChild(redBtn);
        document.querySelector('#messages').appendChild(greenBtn);
        document.querySelector('#messages').appendChild(blueBtn);
    }
    else {
        document.querySelector('#messages').appendChild(blueBtn);
        document.querySelector('#messages').appendChild(greenBtn);
        document.querySelector('#messages').appendChild(redBtn);
    }

    document.querySelector('#start-btn').onclick = startStroop;
}

window.onload = init;

