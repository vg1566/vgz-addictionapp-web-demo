import * as utils from "./utils.js";

const init = () => {
    utils.setAllShopSettings();
    fillResults();
}


const fillResults = () => {
    // Demographic Info
    const name = localStorage.getItem('vgz-addapp-dem-name');
    const lang = localStorage.getItem('vgz-addapp-dem-lang');
    const sex = localStorage.getItem('vgz-addapp-dem-sex');
    const age = localStorage.getItem('vgz-addapp-dem-age');
    const handedness = localStorage.getItem('vgz-addapp-handedness');
    const devType = localStorage.getItem('vgz-addapp-dem-devicetype');
    const devOS = localStorage.getItem('vgz-addapp-dem-deviceos');
    const devInput = localStorage.getItem('vgz-addapp-dem-deviceinput');
    try {
        document.querySelector('#dem-res').innerHTML = `Name: ${name}<br>
        Age: ${age}<br>
        Sex: ${sex}<br>
        Dominant Language: ${lang}<br>
        Handedness: ${handedness}<br>
        Device Type: ${devType}, Device OS: ${devOS}, Device Input Method: ${devInput}`;
    } catch {
        document.querySelector('#dem-res').innerHTML = `Error: missing some information. Please fill out all demographic info on the survey page.`;
    }

    // GUQ Results
    const guqScore = localStorage.getItem('vgz-addapp-guqscore');
    if(guqScore) document.querySelector('#guq-res').innerHTML = `Score: ${guqScore}/60 (test minimum is 0)`;

    // BIS Results
    const bisScore = localStorage.getItem('vgz-addapp-bisscore');
    if(bisScore) document.querySelector('#bis-res').innerHTML = `Score: ${bisScore}/96 (test minimum is 24)`;

    // Balloon Results
    const balloonPoints = localStorage.getItem('vgz-addapp-balloondata');
    const balloonPopNum = localStorage.getItem('vgz-addapp-balloondata-popnum');
    if(balloonPoints) document.querySelector('#balloon-res').innerHTML = `Total number of points collected: ${balloonPoints}<br>
    Total number of balloons popped: ${balloonPopNum}/${utils.numRepetitions.balloon}`;

    // Stroop Results
    //const stroopEffect = localStorage.getItem('vgz-addapp-stroopdata-effect');
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