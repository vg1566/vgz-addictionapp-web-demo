import * as utils from "./utils.js";

const init = () => {
    utils.setAllShopSettings();
    fillResults();
}


const fillResults = () => {
    // Balloon Results
    const balloonPoints = localStorage.getItem('vgz-addapp-balloondata');
    const balloonPopNum = localStorage.getItem('vgz-addapp-balloondata-popnum');
    if(balloonPoints) document.querySelector('#balloon-res').innerHTML = `Total number of points collected: ${balloonPoints}<br>
    Total number of balloons popped: ${balloonPopNum}/${utils.numRepetitions.balloon}`;

    // Stroop Results
    const stroopEffect = localStorage.getItem('vgz-addapp-stroopdata-effect');
    const stroopScore = localStorage.getItem('vgz-addapp-stroopdata-accurates');
    const stroopUnmatchScore = localStorage.getItem('vgz-addapp-stroopdata-unmatchaccurates');
    const stroopUnmatchNum = localStorage.getItem('vgz-addapp-stroopdata-unmatchnum');
    const stroopMatchTime = localStorage.getItem('vgz-addapp-stroopdata-matchtime');
    const stroopUnmatchTime = localStorage.getItem('vgz-addapp-stroopdata-unmatchtime');
    if(stroopEffect) document.querySelector('#stroop-res').innerHTML = `Stroop effect: ${stroopEffect}s<br>
    Overall accuracy: ${stroopScore}/${utils.numRepetitions.stroop}<br>
    Incongruent accuracy: ${stroopUnmatchScore}/${stroopUnmatchNum}<br>
    Total time taken (congruent): ${stroopMatchTime}ms<br>
    Total time taken (incongruent): ${stroopUnmatchTime}ms<br>
    Avg time taken (congruent): ${stroopMatchTime/(stroopScore-stroopUnmatchNum)}ms<br>
    Avg time taken (incongruent): ${stroopUnmatchTime/stroopUnmatchNum}ms<br>`;

    // Trail Results
    const trailTime = localStorage.getItem('vgz-addapp-trailsdata');
    if(trailTime) document.querySelector('#trails-res').innerHTML = `Total time taken to complete task: ${trailTime}ms`;

    // Stop Signal Results
    const sigSuccessNum = localStorage.getItem('vgz-addapp-stopdata-successnum');
    const sigAvgTime = localStorage.getItem('vgz-addapp-stopdata-avgtime');
    const sigTotalStopNum = localStorage.getItem('vgz-addapp-stopdata-totalstopnum');
    const sigFailStopNum = localStorage.getItem('vgz-addapp-stopdata-failstopnum');
    if(sigSuccessNum) document.querySelector('#stop-res').innerHTML = `Overall accuracy: ${sigSuccessNum}/${utils.numRepetitions.stop}<br>
    Avg time taken per non-stop signal: ${sigAvgTime}ms<br>
    Total number of stop signals shown: ${sigTotalStopNum}<br>
    Number of stop signal failed responses: ${sigFailStopNum}<br>`;
}


window.onload = init;