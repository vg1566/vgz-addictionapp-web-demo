import {setTitleColor} from "./utils.js";

const init = () => {
    if(localStorage.getItem('vgz-addapp-titlecolor')) setTitleColor();
    document.querySelector('#default-title').onclick = () => { setTitleColor('black'); }; 
    document.querySelector('#red-title').onclick =  () => { setTitleColor('red'); }; 
    document.querySelector('#blue-title').onclick =  () => { setTitleColor('blue'); }; 
}

window.onload = init;