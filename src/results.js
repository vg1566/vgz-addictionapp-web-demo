import {setTitleColor} from "./utils.js";

const init = () => {
    setShopChanges();
    fillResults();
}

const setShopChanges = () => {
    setTitleColor();
}

const fillResults = () => {
    // Balloon Results
    const balloonPoints = localStorage.getItem('vgz-addapp-balloondata');
    const balloonPopNum = localStorage.getItem('vgz-addapp-balloondata-popnum');
    if(balloonPoints) document.querySelector('#balloon-res').innerHTML = `Total number of points collected: ${balloonPoints}<br>
    Total number of balloons popped: ${balloonPopNum}`;

    // Stroop Results
    const stroopEffect = localStorage.getItem('vgz-addapp-stroopdata-effect');
    const stroopScore = localStorage.getItem('vgz-addapp-stroopdata-accurates');
    const stroopUnmatchScore = localStorage.getItem('vgz-addapp-stroopdata-unmatchaccurates');
    const stroopUnmatchNum = localStorage.getItem('vgz-addapp-stroopdata-unmatchnum');
    const stroopMatchTime = localStorage.getItem('vgz-addapp-stroopdata-matchtime');
    const stroopUnmatchTime = localStorage.getItem('vgz-addapp-stroopdata-unmatchtime');
    if(stroopEffect) document.querySelector('#stroop-res').innerHTML = `Stroop effect: ${stroopEffect}s<br>
    Overall accuracy: ${stroopScore}/10<br>
    Incongruent accuracy: ${stroopUnmatchScore}/${stroopUnmatchNum}<br>
    Total time taken (congruent): ${stroopMatchTime}ms<br>
    Total time taken (incongruent): ${stroopUnmatchTime}ms<br>
    Avg time taken (congruent): ${stroopMatchTime/(stroopScore-stroopUnmatchNum)}ms<br>
    Avg time taken (incongruent): ${stroopUnmatchTime/stroopUnmatchNum}ms<br>
    `;

    // Trail Results
    const trailTime = localStorage.getItem('vgz-addapp-trailsdata');
    if(trailTime) document.querySelector('#trails-res').innerHTML = `Total time taken to complete task: ${trailTime}ms`;
}


window.onload = init;