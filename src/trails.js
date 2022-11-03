import * as utils from "./utils.js";

let ctx;
let canvas;
const letters = 'ABCDEFGHIJKL'; //abcdefghijkl
let nextGoal = 1;

let nodeRadius = 10;
const nodeColor = 'gray';
let nodeTextSize = 20;

let nodeLocations;// = {};
let curNodeNum;// = 1;
let curLetterNodeNum;// = 0;
let attempts;// = 0;

let mistakes = 0;

let dragging;

let startBtn;
let startTime;

const smallScreen = {
    maxNodes: 12,
    nodeRadius: 16
}

const randNum = (max, min=0) => {
    max -= min;
    return Math.floor(Math.random()*max)+min;
}

const drawCircle = (x,y,fillStyle=nodeColor,radius=nodeRadius,startAngle=0,endAngle=Math.PI*2,lineWidth=0,strokeStyle="black") => {
    ctx.save();
    ctx.fillStyle = fillStyle; 
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle)
    ctx.closePath();
    ctx.fill();
    if(lineWidth > 0)
    {
        ctx.lineWidth = lineWidth; 
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
    }
    ctx.restore();
}

const drawText = (text,x,y,color="white",style=`${nodeTextSize}px Open Dyslexic`) => {
    ctx.save();
    ctx.font = style;
    ctx.fillStyle = color;
    const shift = nodeTextSize/2;
    ctx.fillText(text, x-shift+2, y+shift-2);
    ctx.restore();
}

const findConflicts = (x, y, dia=nodeRadius*2) => {
    let xDif;
    let yDif;
    for(let i=1; i<curNodeNum; i++) {
        xDif = nodeLocations[i][0] - x;
        yDif = nodeLocations[i][1] - y;
        if(xDif < dia && xDif > -dia && yDif < dia && yDif > -dia) return i;
    }
    for(let i=0; i<curLetterNodeNum; i++) {
        xDif = nodeLocations[letters[i]][0] - x;
        yDif = nodeLocations[letters[i]][1] - y;
        if(xDif < dia && xDif > -dia && yDif < dia && xDif > -dia) return letters[i];
    }
    return false;
}


const drawNode = (text) => {
    let x = randNum(canvas.width-nodeRadius, nodeRadius);
    let y = randNum(canvas.height-nodeRadius, nodeRadius);
    if(findConflicts(x,y)) {
        attempts++;
        if(attempts>1000) {
            console.log('System took too long');
            drawNodes();
            return; 
        }
        drawNode(text);
    }
    else {
        nodeLocations[text] = [x, y];
        drawCircle(x, y);
        drawText(text, x, y);
    }
}

// send orders for each node to be drawn
const drawNodes = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodeLocations = {};
    curNodeNum = 1;
    curLetterNodeNum = 0;
    attempts = 0;
    for(let i = 0; i < smallScreen.maxNodes/2; i++) {
        drawNode(i+1);
        curNodeNum++;
        drawNode(letters[i]);
        curLetterNodeNum++;
    }
}

const mousedown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging = true;
    // get location of mouse in canvas coordinates
    let mouse = getMouse(e);
    // PENCIL TOOL
    ctx.beginPath();
    // move pen to x,y of mouse
    ctx.moveTo(mouse.x, mouse.y);
}

const getMouse = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let mouse = {}
    mouse.x = e.pageX - e.target.offsetLeft;
    mouse.y = e.pageY - e.target.offsetTop;
    return mouse;
}

const mousemove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(! dragging) return;
    
    let mouse = getMouse(e);
    
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    
    let pixelData = ctx.getImageData(mouse.x, mouse.y, 1, 1).data; 
    if(pixelData[0] > 100 && pixelData[0] < 200) {
        let collision = findConflicts(mouse.x, mouse.y, nodeRadius);
        console.log(collision);
        if(collision) {
            if(collision === nextGoal) {
                drawCircle(nodeLocations[collision][0], nodeLocations[collision][1], "black");
                if(letters.includes(nextGoal)) {
                    nextGoal = letters.indexOf(nextGoal)+2;
                    if(nextGoal>=curNodeNum) {
                        endTask();
                    }
                }
                else {
                    nextGoal = letters[nextGoal-1];
                }
                
                console.log(`next goal:${nextGoal}`);
                //console.log(`curnodenum:${curNodeNum}`);
            }
            else {
                mistakes++;
            }
        }
    }

    // Pencil tool
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
}

const mouseup = (e) => {
    dragging = false;
    ctx.closePath();
}

// if the user drags out of the canvas
const mouseout = (e) => {
    dragging = false;
    ctx.closePath();
}

// get whole time
// save results
const endTask = () => {
    const endTime = new Date();
    const totalTaskTime = endTime-startTime;
    localStorage.setItem('vgz-addapp-trailsdata', totalTaskTime);
    let earnedPoints = Math.floor(300 - (totalTaskTime/100));
    if(earnedPoints<0) earnedPoints = 0;
    //canvas.classList.add('hidden');
    utils.addPoints(earnedPoints);
    document.querySelector('#content').innerHTML = `The task is now complete. Your score is ${earnedPoints}, which can now be spent at the shop.`;
}

const init = () => {
    utils.setAllShopSettings();
    if(localStorage.getItem('vgz-addapp-trailsdata')) {
        document.querySelector('#task-done-title').classList.remove('hidden');
        document.querySelector('#task-done-msg').classList.remove('hidden');
        document.querySelector('#start-btn').classList.add('hidden');
        document.querySelector('#instructions').classList.add('hidden');
        return;
    }
    if(!localStorage.getItem('vgz-addapp-handedness')) {
        document.querySelector('#survey-msg').classList.remove('hidden');
        document.querySelector('#start-btn').classList.add('hidden');
        document.querySelector('#instructions').classList.add('hidden');
        return;
    }

    startBtn = document.querySelector('#start-btn');

    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 360;
    canvas.height = 360;
    nodeRadius = smallScreen.nodeRadius;
    drawNodes();
    
    //drawCircle(360,360, 20);
    canvas.onmousedown = mousedown;
	canvas.onmousemove = mousemove;
	canvas.onmouseup = mouseup;
	canvas.onmouseout = mouseout;
    canvas.ontouchstart = mousedown;
    canvas.ontouchmove = mousemove;
    canvas.ontouchend = mouseup;
    canvas.ontouchcancel = mouseout;
    
    startBtn.onclick = () => { document.querySelector('#content').appendChild(canvas); startBtn.classList.add('hidden'); startTime = new Date(); }
}

window.onload = init;