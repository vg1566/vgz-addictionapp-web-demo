import {setAllShopSettings} from "./utils.js";

let startBtn;

let ctx;
let canvas;
let halfSize = 180;

const markerTextSize = 50;

const statuses = ["null", "left", "right", "stop"];
const markers = ["+", "<<<", ">>>", "stop"];
let status = statuses[0];
let score = 0;
let stopStatusNum = 0;
let stopFailNum = 0;
let remainingGenerations = 29;

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
    
    startBtn.onclick = () => { document.querySelector('#content').appendChild(canvas); startBtn.classList.add('hidden'); }
    waitStatus();
}

const endTask = () => {

}

// identify which half of the a touch/mousedown occurs on
const findMouseHalf = (e) => {
    const mouse = getMouse(e);
    if(status == "stop") {
        stopFailNum++;
    }
    if(mouse.x > halfSize) {
        // right side
        
        if(status == "right") score++;
    } else {
        // left side
        if(status == "left") score++;
    }
    waitStatus();
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
    if (remainingGenerations == 0) {
        endTask();
    }
    remainingGenerations--;
    status = "null";
    drawMarker(markers[0]);

    let randWait = Math.floor(Math.random()*5000);
    setTimeout(generateStatus, randWait);
}

// change status/goal to new item
const generateStatus = () => {
    let randNum = Math.floor(Math.random()*3) + 1;
    if(randNum == 3) randNum = Math.floor(Math.random()*3) + 1; // lower odds of stop signal 
    status = statuses[randNum];
    drawMarker(markers[randNum]);
    if(status == "stop") {
        stopStatusNum++;
        let randWait = Math.floor(Math.random()*5000);
        setTimeout(waitStatus, randWait);
    }
}

// draws marker on canvas
const drawMarker = (m) => {
    console.log('marker: ' + m);
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