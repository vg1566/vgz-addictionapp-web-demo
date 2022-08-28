import {setTitleColor} from "./utils.js";
let owned = ['blackTitle'];
let curPtTotal = 0;
let errorHid = true;
let errorMsg;
let curPtLabel;

const titleColorPrice = 200;

const addOwned = (id) => {
    owned.push(id);
    localStorage.setItem('vgz-addapp-owneditems', owned.toString())
}

// to do: mark owned? 

const tryBuy = (callback, value, price, id) => {
    // if you already own it, don't charge
    if(owned.includes(id))
    {
        // hide error
        if(!errorHid) {
            errorMsg.classList.add('hidden');
            errorHid = true;
        }
        callback(value);
    }
    else if(curPtTotal >= price) {
        // hide error
        if(!errorHid) {
            errorMsg.classList.add('hidden');
            errorHid = true;
        }
        // charge for item
        curPtTotal -= price;
        localStorage.setItem('vgz-addapp-shoppoints', curPtTotal);
        curPtLabel.innerHTML = curPtTotal;
        addOwned(id);
        callback(value);
    }
    else {
        if(errorHid) {
            errorMsg.classList.remove('hidden');
            errorHid = false;
        }
    }
}

const init = () => {
    if(localStorage.getItem('vgz-addapp-titlecolor')) setTitleColor();
    if(localStorage.getItem('vgz-addapp-shoppoints')) curPtTotal = Math.floor(localStorage.getItem('vgz-addapp-shoppoints'));
    if(localStorage.getItem('vgz-addapp-owneditems')) owned = localStorage.getItem('vgz-addapp-owneditems').split(',');
    errorMsg = document.querySelector('#error');
    curPtLabel = document.querySelector('#cur-pt-label');
    curPtLabel.innerHTML = curPtTotal;
    document.querySelector('#default-title').onclick = () => { tryBuy(setTitleColor, 'black', titleColorPrice, 'blackTitle'); }; 
    document.querySelector('#red-title').onclick =  () => { tryBuy(setTitleColor, 'red', titleColorPrice, 'redTitle'); }; 
    document.querySelector('#blue-title').onclick =  () => { tryBuy(setTitleColor, 'blue', titleColorPrice, 'blueTitle'); }; 
}

window.onload = init;