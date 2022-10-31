import {setAllShopSettings} from "./utils.js";

let startBtn;

let ctx;
let canvas;
let halfSize = 180;

const markerTextSize = 50;

const statuses = ["null", "left", "right"];
const markers = ["+", "<<<", ">>>"];
let stopIntent = false;
let stopActive = false;
let stopSignalDelay = 250;
let stopSignalWait = 2000;
const stopOdds = 4;
const waitMax = 3000;
const totalNumGenerations = 10;
let status = statuses[0];
let score = 0;
let stopTotalNum = 0;
let stopFailNum = 0;
let stopWinNum = 0;
let goTotalTime = 0;
let remainingGenerations = totalNumGenerations;

let startTime;
let newTime;

const init = () => {
    setAllShopSettings();

    startBtn = document.querySelector('#start-btn');

    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    //ctx.textAlign = "center"; 
    //ctx.fillStyle = "black";
    //ctx.font = `${markerTextSize}px Open Dyslexic`; 
    canvas.width = 360;
    canvas.height = 360;
    
    // find mouse/touch when they occur (begin)
    canvas.onmousedown = findMouseHalf;
    canvas.ontouchstart = findMouseHalf;
    
    startBtn.onclick = () => {
        document.querySelector('#content').appendChild(canvas);
        startBtn.classList.add('hidden');
        waitStatus();
    }
}

const endTask = () => {
    document.querySelector('#content').innerHTML = `gratz. score: ${score}/${totalNumGenerations}. Your avg time taken is ${Math.floor(goTotalTime/(totalNumGenerations-stopTotalNum))}ms`; //
}

// identify which half of the a touch/mousedown occurs on
const findMouseHalf = (e) => {
    const mouse = getMouse(e);
    if(stopActive == true) {
        stopFailNum++;
        stopIntent = false;
        stopActive = false;
    }
    if(mouse.x > halfSize) {
        // right side
        
        if(status == "right") score++;
    } else {
        // left side
        if(status == "left") score++;
    }
    if(status != "null") waitStatus();
}

// locate mouse/touch
const getMouse = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let mouse = {}
    mouse.x = e.pageX - e.target.offsetLeft;
    mouse.y = e.pageY - e.target.offsetTop;
    return mouse;
}

// wait a randomized amount of time, then generate a new status
const waitStatus = () => {
    if(stopActive == true) {
        stopWinNum++;
        score++;
        stopActive = false;
        stopIntent = false;
    }
    else if (startTime) {
        newTime = new Date();
        goTotalTime += newTime - startTime;
    }
    if (remainingGenerations == 0) {
        endTask();
    }
    remainingGenerations--;
    status = "null";
    drawMarker(markers[0]);

    let randWait = Math.floor(Math.random()*waitMax);
    setTimeout(generateStatus, randWait);
}

// change status/goal to new item
const generateStatus = () => {
    let randNum = Math.floor(Math.random()*2) + 1;
    status = statuses[randNum];
    drawMarker(markers[randNum]);
    randNum = Math.floor(Math.random()*stopOdds) + 1;

    // if stopodds matched, wait for delay to finish, change marker to 'stop', and wait for a bit.
    if(randNum == stopOdds) {
        stopIntent = true;
        setTimeout(() => {
            stopActive = true;
            stopTotalNum++;
            drawMarker("stop");
            
            setTimeout(waitStatus, stopSignalWait);
        }, stopSignalDelay);
    }
    startTime = new Date();
}

// draws marker on canvas
const drawMarker = (m) => {
    //console.log('marker: ' + m);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawText(m, canvas.width/2, canvas.height/2);

    // check for stop marker first tho //??????
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