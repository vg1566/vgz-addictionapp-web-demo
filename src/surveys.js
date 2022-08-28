import {setTitleColor} from "./utils.js";

let enGuq = ``;
let itGuq = ``;

let enBis = ``;
let itBis = ``;

const setShopChanges = () => {
    setTitleColor();
}

const fillGuq = () => {
    enGuq += `<h2>Survey 1</h2>`;
    itGuq += `<h2>Indagine 1</h2>`;
    //#region q1
    enGuq += `<hr><h3>Please indicate how intense your desire to gamble been in the last 24 hours</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q1" value="1" id="guq-q1-1">
            <label for="guq-q1-1">1 (Absent)</label>`;
    for(let i=2; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q1" value="${i}" id="guq-q1-${i}">
            <label for="guq-q1-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q1" value="10" id="guq-q1-10">
            <label for="guq-q1-10">10 (Very Intense)</label>
        </div>`;

    itGuq += `<hr><h3>Indichi quanto è stato intenso il suo desiderio di giocare d'azzardo nelle ultime 24 ore:</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q1" value="1" id="guq-q1-1">
            <label for="guq-q1-1">1 (Assente)</label>`;
    for(let i=2; i<10; i++) {
        itGuq += `<input type="radio" name="guq-q1" value="${i}" id="guq-q1-${i}">
            <label for="guq-q1-${i}">${i}</label>`;
    }
    itGuq += `<input type="radio" name="guq-q1" value="10" id="guq-q1-10">
            <label for="guq-q1-10">10 (Molto intenso)</label>
        </div>`;
    //#endregion q1
    //#region q2
    enGuq += `<hr><h3>Please indicate how intense your desire NOT to gamble been in the last 24 hours</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q2" value="1" id="guq-q2-1">
            <label for="guq-q2-1">1 (Absent)</label>`;
    for(let i=2; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q2" value="${i}" id="guq-q2-${i}">
            <label for="guq-q2-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q2" value="10" id="guq-q2-10">
            <label for="guq-q2-10">10 (Very Intense)</label>
        </div>`;
    itGuq += `<hr><h3>Indichi quanto è stato intenso il suo desiderio di NON giocare d'azzardo nelle ultime 24 ore:</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q2" value="1" id="guq-q2-1">
            <label for="guq-q2-1">1 (Assente)</label>`;
    for(let i=2; i<10; i++) {
        itGuq += `<input type="radio" name="guq-q2" value="${i}" id="guq-q2-${i}">
            <label for="guq-q2-${i}">${i}</label>`;
    }
    itGuq += `<input type="radio" name="guq-q2" value="10" id="guq-q2-10">
            <label for="guq-q2-10">10 (Molto intenso)</label>
        </div>`;
    //#endregion q2
    //#region q3
    enGuq += `<hr><h3>Please indicate how confident you are in your capacity to resist gambling today</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q3" value="1" id="guq-q3-1">
            <label for="guq-q3-1">1 (I will definitely gamble)</label>`;
    for(let i=2; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q3" value="${i}" id="guq-q3-${i}">
            <label for="guq-q3-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q3" value="10 (Very intense)" id="guq-q3-10">
            <label for="guq-q3-10">10 (I will definitely not gamble)</label>
        </div>`;
    itGuq += `<hr><h3>Valuti la sua sicurezza nella sua capacità di resistere a giocare d'azzardo oggi:</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q3" value="1" id="guq-q3-1">
            <label for="guq-q3-1">1 (Giocherò sicuramente)</label>`;
    for(let i=2; i<10; i++) {
        itGuq += `<input type="radio" name="guq-q3" value="${i}" id="guq-q3-${i}">
            <label for="guq-q3-${i}">${i}</label>`;
    }
    itGuq += `<input type="radio" name="guq-q3" value="10" id="guq-q3-10">
            <label for="guq-q3-10">10 (Resisterò sicuramente)</label>
        </div>`;
    //#endregion
    //#region q4
    enGuq += `<hr><h3>Please indicate how likely it is that you will gamble within the next week</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q4" value="1" id="guq-q4-1">
            <label for="guq-q4-1">1 (I will definitely not gamble)</label>`;
    for(let i=2; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q4" value="${i}" id="guq-q4-${i}">
            <label for="guq-q4-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q4" value="10 (Very intense)" id="guq-q4-10">
            <label for="guq-q4-10">10 (I will definitely gamble)</label>
        </div>`;
    itGuq += `<hr><h3>Valuti la probabilità di giocare d'azzardo durante la prossima settimana:</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q4" value="1" id="guq-q4-1">
            <label for="guq-q4-1">1 (Sono sicuro che non giocherò)</label>`;
    for(let i=2; i<10; i++) {
        itGuq += `<input type="radio" name="guq-q4" value="${i}" id="guq-q4-${i}">
            <label for="guq-q4-${i}">${i}</label>`;
    }
    itGuq += `<input type="radio" name="guq-q4" value="10" id="guq-q4-10">
            <label for="guq-q4-10">10 (Sono sicuro che giocherò)</label>
        </div>`;
    //#endregion
    //#region q5
    enGuq += `<hr><h3>Please imagine yourself in a typical gambling environment (e.g. casino, slot machine, track races, or any other place that brings you back to gambling more intensely). If you 
    were in one of these places TODAY, how likely is it that you would gamble?</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q5" value="1" id="guq-q5-1">
            <label for="guq-q5-1">1 (I would definitely not gamble)</label>`;
    for(let i=2; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q5" value="${i}" id="guq-q5-${i}">
            <label for="guq-q5-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q5" value="10 (Very intense)" id="guq-q5-10">
            <label for="guq-q5-10">10 (I would definitely gamble)</label>
        </div>`;
    itGuq += `<hr><h3>Provi a immaginarsi nel contesto in cui solitamente gioca d'azzardo (ad es. casino, slot machine, corse su pista, 
        o qualsiasi esempio la riconduce più intensamente al gioco d'azzardo). Se si trocasse in questo contesto OGGI, con quale 
        probabilità giocherebbe d'azzardo?</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q5" value="1" id="guq-q5-1">
            <label for="guq-q5-1">1 (Sicuramente no)</label>`;
    for(let i=2; i<10; i++) {
        itGuq += `<input type="radio" name="guq-q5" value="${i}" id="guq-q5-${i}">
            <label for="guq-q5-${i}">${i}</label>`;
    }
    itGuq += `<input type="radio" name="guq-q5" value="10" id="guq-q5-10">
            <label for="guq-q5-10">10 (Sicuramente sì)</label>
        </div>`;
    //#endregion
    //#region q6
    enGuq += `<hr><h3>Please indicate how strong your desire to gamble is when faced with an element that reminds you of it (watching a sports game, seeing a slot machine, a certain smell, etc.)</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q6" value="1" id="guq-q6-1">
            <label for="guq-q6-1">1 (Absent)</label>`;
    for(let i=2; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q6" value="${i}" id="guq-q6-${i}">
            <label for="guq-q6-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q6" value="10 (Very intense)" id="guq-q6-10">
            <label for="guq-q6-10">10 (Very intense)</label>
        </div>`;
    itGuq += `<hr><h3>Valuti quanto è forte il desiderio di giocare d'azzardo quando si trova di fronte a qualche elemento che glielo 
    ricorda (ad es. guardare una partita di uno sport, vedere una slot machine, un certo odore, ecc.):</h3>
        <div class="survey-question">
            <input type="radio" name="guq-q6" value="1" id="guq-q6-1">
            <label for="guq-q6-1">1 (Assente)</label>`;
    for(let i=2; i<10; i++) {
        itGuq += `<input type="radio" name="guq-q6" value="${i}" id="guq-q6-${i}">
            <label for="guq-q6-${i}">${i}</label>`;
    }
    itGuq += `<input type="radio" name="guq-q6" value="10" id="guq-q6-10">
            <label for="guq-q6-10">10 (Molto intenso)</label>
        </div>`;
    //#endregion
}

const fillBis = () => {
    const enAnswers = ['N/A', 'Rarely/Never', 'Occasionally', 'Often', 'Almost Always/Always'];
    const itAnswers = ['N/A', 'Raramente/Non Mai', 'Ogni Tanto', 'Spesso', 'Quasi Sempre/Sempre'];
    enBis += `<h2>Survey 2</h2>`;
    itBis += `<h2>Indagine 2</h2>`;
    //#region q1
    enBis += `<hr><h3>I plan tasks carefully</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Pianifico attentamente le compite</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q1" value="${i}" id="bis-q1-${i}">
            <label for="bis-q1-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q1" value="${i}" id="bis-q1-${i}">
        <label for="bis-q1-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q1
    //#region q2
    enBis += `<hr><h3>I do things without thinking</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Faccio le cose senza pensare</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q2" value="${i}" id="bis-q2-${i}">
            <label for="bis-q2-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q2" value="${i}" id="bis-q2-${i}">
        <label for="bis-q2-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q2
    //#region q3
    enBis += `<hr><h3>I make up my mind quickly</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Prendo le decisione in fretta</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q3" value="${i}" id="bis-q3-${i}">
            <label for="bis-q3-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q3" value="${i}" id="bis-q3-${i}">
        <label for="bis-q3-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q3
    //#region q4
    enBis += `<hr><h3>I am happy-go-lucky</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono spensierato</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q4" value="${i}" id="bis-q4-${i}">
            <label for="bis-q4-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q4" value="${i}" id="bis-q4-${i}">
        <label for="bis-q4-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q4
    //#region q5
    enBis += `<hr><h3>I don't "pay attention"</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Non "presto attenzione"</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q5" value="${i}" id="bis-q5-${i}">
            <label for="bis-q5-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q5" value="${i}" id="bis-q5-${i}">
        <label for="bis-q5-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q5
    //#region q6
    enBis += `<hr><h3>I have "racing" thoughts</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Ho pensieri che "si rincorrono"</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q6" value="${i}" id="bis-q6-${i}">
            <label for="bis-q6-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q6" value="${i}" id="bis-q6-${i}">
        <label for="bis-q6-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q6
    //#region q7
    enBis += `<hr><h3>I plan trips well ahead of time</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Pianifico i miei viaggi con largo anticipo.</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q7" value="${i}" id="bis-q7-${i}">
            <label for="bis-q7-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q7" value="${i}" id="bis-q7-${i}">
        <label for="bis-q7-${i}">${itAnswers[i]}</label>`;
    }
    //#endregion q7
}

const init = () => {
    setShopChanges();
    const guqElement = document.querySelector('#guq');
    const bisElement = document.querySelector('#bis');
    fillGuq();
    fillBis();
    guqElement.innerHTML = enGuq;
    bisElement.innerHTML = enBis;
    document.querySelector('#en-button').onclick = () => {
        guqElement.innerHTML = enGuq;
        bisElement.innerHTML = enBis;
    }
    document.querySelector('#it-button').onclick = () => {
        guqElement.innerHTML = itGuq
        bisElement.innerHTML = itBis;
    }
}

window.onload = init;