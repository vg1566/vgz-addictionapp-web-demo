import {setTitleColor} from "./utils.js";

let enDem = ``;
let itDem = ``;

let enGuq = ``;
let itGuq = ``;

let enBis = ``;
let itBis = ``;

const setShopChanges = () => {
    setTitleColor();
}

const fillDem = () => {
    enDem += `<h2 id="demo-h">Demographic Info</h2>`;
    itDem += `<h2 id="demo-h">Informazioni Demografiche</h2>`;

    enDem += `<label for="f-name">First Name:</label>`;
    itDem += `<label for="f-name">Nome:</label>`
    let input = `<input type="text" id="f-name"><br>`;
    enDem += input;
    itDem += input;

    enDem += `<label for="f-name">Last Name:</label>`;
    itDem += `<label for="f-name">Cognome:</label>`;
    input = `<input type="text" id="l-name"><br>`;
    enDem += input;
    itDem += input;

    enDem += `<label for="age">Age:</label>`;
    itDem += `<label for="age">Age:</label>`;
    input = `<input type="number" id="age"><br>`;
    enDem += input;
    itDem += input;

    enDem += `<label for="handedness">Handedness:</label>`;
    input = `<input type="radio" name="handedness" id="handedness-l" value='left'><label for="handedness-l">Left</label>
    <input type="radio" name="handedness" id="handedness-r" value='right'><label for="handedness-r">Right</label><br><br>`;
    enDem += input;

    enDem += `<label for="device-type">Device Type:</label>`;
    input = `<input type="radio" name="device-type" id="device-type-c" value='computer'><label for="device-type-c">Laptop/PC</label>
    <input type="radio" name="device-type" id="device-type-p" value='phone'><label for="device-type-p">Smartphone</label>
    <input type="radio" name="device-type" id="device-type-o" value='other'><label for="device-type-o">Other</label><br><br>
    `;
    enDem += input;

    enDem += `<label for="device-os">Device OS:</label>`;
    input = `<input type="radio" name="device-os" id="device-os-ap" value='apple'><label for="device-os-ap">Apple</label>
    <input type="radio" name="device-os" id="device-os-an" value='android'><label for="device-os-an">Android</label>
    <input type="radio" name="device-os" id="device-os-w" value='windows'><label for="device-os-w">Windows</label>
    <input type="radio" name="device-os" id="device-os-l" value='linux'><label for="device-os-l">Linux</label>
    <input type="radio" name="device-os" id="device-os-o" value='other'><label for="device-os-o">Other</label><br><br>
    `;
    enDem += input;

    enDem += `<label for="device-input">Device Input Method:</label>`;
    input = `<input type="radio" name="device-input" id="device-input-m" value='mouse'><label for="device-input-m">Mouse</label>
    <input type="radio" name="device-input" id="device-input-tp" value='touchpad'><label for="device-input-tp">Touchpad</label>
    <input type="radio" name="device-input" id="device-input-ts" value='touchscreen'><label for="device-input-ts">Touchscreen (smartphone)</label>
    <input type="radio" name="device-input" id="device-input-o" value='other'><label for="device-input-o">Other</label><br><br>
    `;
    enDem += input;
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

// Barratt Impulsiveness Scale from here: https://doi.org/10.1002/1097-4679(199511)51:6%3C768::AID-JCLP2270510607%3E3.0.CO;2-1

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
            <label for="bis-q1-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q1" value="${i}" id="bis-q1-${i}">
        <label for="bis-q1-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q1
    //#region q2
    enBis += `<hr><h3>I do things without thinking</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Faccio le cose senza pensare</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q2" value="${i}" id="bis-q2-${i}">
            <label for="bis-q2-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q2" value="${i}" id="bis-q2-${i}">
        <label for="bis-q2-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q2
    //#region q3
    enBis += `<hr><h3>I make up my mind quickly</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Prendo le decisione in fretta</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q3" value="${i}" id="bis-q3-${i}">
            <label for="bis-q3-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q3" value="${i}" id="bis-q3-${i}">
        <label for="bis-q3-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q3
    //#region q4
    enBis += `<hr><h3>I am happy-go-lucky</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono spensierato</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q4" value="${i}" id="bis-q4-${i}">
            <label for="bis-q4-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q4" value="${i}" id="bis-q4-${i}">
        <label for="bis-q4-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q4
    //#region q5
    enBis += `<hr><h3>I don't "pay attention"</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Non "presto attenzione"</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q5" value="${i}" id="bis-q5-${i}">
            <label for="bis-q5-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q5" value="${i}" id="bis-q5-${i}">
        <label for="bis-q5-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q5
    //#region q6
    enBis += `<hr><h3>I have "racing" thoughts</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Ho pensieri che "si rincorrono"</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q6" value="${i}" id="bis-q6-${i}">
            <label for="bis-q6-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q6" value="${i}" id="bis-q6-${i}">
        <label for="bis-q6-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q6
    //#region q7
    enBis += `<hr><h3>I plan trips well ahead of time</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Pianifico i miei viaggi con largo anticipo</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q7" value="${i}" id="bis-q7-${i}">
            <label for="bis-q7-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q7" value="${i}" id="bis-q7-${i}">
        <label for="bis-q7-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q7
    //#region q8
    enBis += `<hr><h3>I am self controlled</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Ho l'autocontrollo</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q8" value="${i}" id="bis-q8-${i}">
            <label for="bis-q8-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q8" value="${i}" id="bis-q8-${i}">
        <label for="bis-q8-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q8
    //#region q9
    enBis += `<hr><h3>I concentrate easily</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Concentro facilmente</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q9" value="${i}" id="bis-q9-${i}">
            <label for="bis-q9-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q9" value="${i}" id="bis-q9-${i}">
        <label for="bis-q9-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q9
    //#region q10
    enBis += `<hr><h3>I save regularly</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Salvo regolarmente</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q10" value="${i}" id="bis-q10-${i}">
            <label for="bis-q10-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q10" value="${i}" id="bis-q10-${i}">
        <label for="bis-q10-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q10
    //#region q11
    enBis += `<hr><h3>I "squirm" at plays or lectures</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Mi "contorco" alle a le recite è lezioni</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q11" value="${i}" id="bis-q11-${i}">
            <label for="bis-q11-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q11" value="${i}" id="bis-q11-${i}">
        <label for="bis-q11-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q11
    //#region q12
    enBis += `<hr><h3>I am a careful thinker</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono un pensatore attento</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q12" value="${i}" id="bis-q12-${i}">
            <label for="bis-q12-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q12" value="${i}" id="bis-q12-${i}">
        <label for="bis-q12-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q12
    //#region q13
    enBis += `<hr><h3>I plan for job security</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Pianifico per la sicurezza del lavoro</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q13" value="${i}" id="bis-q13-${i}">
            <label for="bis-q13-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q13" value="${i}" id="bis-q13-${i}">
        <label for="bis-q13-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q13
    //#region q14
    enBis += `<hr><h3>I say things without thinking</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Parlo senza pensare</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q14" value="${i}" id="bis-q14-${i}">
            <label for="bis-q14-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q14" value="${i}" id="bis-q14-${i}">
        <label for="bis-q14-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q14
    //#region q15
    enBis += `<hr><h3>I like to think about complex problems</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Mi piace pensare a problemi complessi</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q15" value="${i}" id="bis-q15-${i}">
            <label for="bis-q15-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q15" value="${i}" id="bis-q15-${i}">
        <label for="bis-q15-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q15
    //#region q16
    enBis += `<hr><h3>I change jobs</h3> <!--In general, or...?-->
        <div class="survey-question">`; 
    itBis += `<hr><h3>Cambio lavoro</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q16" value="${i}" id="bis-q16-${i}">
            <label for="bis-q16-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q16" value="${i}" id="bis-q16-${i}">
        <label for="bis-q16-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q16
    //#region q17
    enBis += `<hr><h3>I act "on impulse"</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Agisco "d'impulso"</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q17" value="${i}" id="bis-q17-${i}">
            <label for="bis-q17-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q17" value="${i}" id="bis-q17-${i}">
        <label for="bis-q17-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q17
    //#region q18
    enBis += `<hr><h3>I get easily bored when solving thought problems</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Mi annoio facilmente quando risolvo problemi di pensiero</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q18" value="${i}" id="bis-q18-${i}">
            <label for="bis-q18-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q18" value="${i}" id="bis-q18-${i}">
        <label for="bis-q18-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q18
    //#region q19
    enBis += `<hr><h3>I act on the spur of the moment</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Agisco di impulso del momento</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q19" value="${i}" id="bis-q19-${i}">
            <label for="bis-q19-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q19" value="${i}" id="bis-q19-${i}">
        <label for="bis-q19-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q19
    //#region q20
    enBis += `<hr><h3>I am a steady thinker</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono un pensatore calmo</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q20" value="${i}" id="bis-q20-${i}">
            <label for="bis-q20-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q20" value="${i}" id="bis-q20-${i}">
        <label for="bis-q20-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q20
    //#region q21
    enBis += `<hr><h3>I change residences</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Cambio residenza</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q21" value="${i}" id="bis-q21-${i}">
            <label for="bis-q21-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q21" value="${i}" id="bis-q21-${i}">
        <label for="bis-q21-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q21
    //#region q22
    enBis += `<hr><h3>I buy things on impulse</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Compro le cose d'impulso</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q22" value="${i}" id="bis-q22-${i}">
            <label for="bis-q22-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q22" value="${i}" id="bis-q22-${i}">
        <label for="bis-q22-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q22
    //#region q23
    enBis += `<hr><h3>I can only think about one thing at a time</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Posso pensare solo a una cosa alla volta</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q23" value="${i}" id="bis-q23-${i}">
            <label for="bis-q23-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q23" value="${i}" id="bis-q23-${i}">
        <label for="bis-q23-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q23
    //#region q24
    enBis += `<hr><h3>I change hobbies</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Cambio hobby</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q24" value="${i}" id="bis-q24-${i}">
            <label for="bis-q24-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q24" value="${i}" id="bis-q24-${i}">
        <label for="bis-q24-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q24
    //#region q25
    enBis += `<hr><h3>I spend or charge more than I earn</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Spendo o addebito più di quanto guadagno</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q25" value="${i}" id="bis-q25-${i}">
            <label for="bis-q25-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q25" value="${i}" id="bis-q25-${i}">
        <label for="bis-q25-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q25
    //#region q26
    enBis += `<hr><h3>I often have extraneous thoughts when thinking</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Ho spesso pensieri estranei quando penso</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q26" value="${i}" id="bis-q26-${i}">
            <label for="bis-q26-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q26" value="${i}" id="bis-q26-${i}">
        <label for="bis-q26-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q26
    //#region q27
    enBis += `<hr><h3>I am more interested in the present than the future</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono più interessato al presente che al futuro</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q27" value="${i}" id="bis-q27-${i}">
            <label for="bis-q27-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q27" value="${i}" id="bis-q27-${i}">
        <label for="bis-q27-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q27
    //#region q28
    enBis += `<hr><h3>I am restless at the theater or lectures</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono irrequieto a teatro o in classe</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q28" value="${i}" id="bis-q28-${i}">
            <label for="bis-q28-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q28" value="${i}" id="bis-q28-${i}">
        <label for="bis-q28-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q28
    //#region q29
    enBis += `<hr><h3>I like puzzles</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Mi piacciono i puzzle</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q29" value="${i}" id="bis-q29-${i}">
            <label for="bis-q29-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q29" value="${i}" id="bis-q29-${i}">
        <label for="bis-q29-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q29
    //#region q30
    enBis += `<hr><h3>I am future oriented</h3>
        <div class="survey-question">`; 
    itBis += `<hr><h3>Sono orientato al futuro</h3>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q30" value="${i}" id="bis-q30-${i}">
            <label for="bis-q30-${i}">${enAnswers[i]}</label></div>`;
        itBis += `<input type="radio" name="bis-q30" value="${i}" id="bis-q30-${i}">
        <label for="bis-q30-${i}">${itAnswers[i]}</label></div>`;
    }
    //#endregion q30
}

const init = () => {
    setShopChanges();
    const demElement = document.querySelector('#dem');
    const guqElement = document.querySelector('#guq');
    const bisElement = document.querySelector('#bis');
    fillDem();
    fillGuq();
    fillBis();
    demElement.innerHTML = enDem;
    guqElement.innerHTML = enGuq;
    bisElement.innerHTML = enBis;
    //document.querySelector('#en-button').onclick = () => {
    //    demElement.innerHTML = enDem;
    //    guqElement.innerHTML = enGuq;
    //    bisElement.innerHTML = enBis;
    //}
    //document.querySelector('#it-button').onclick = () => {
    //    demElement.innerHTML = itDem;
    //    guqElement.innerHTML = itGuq;
    //    bisElement.innerHTML = itBis;
    //}
    document.querySelector('#submit-button').onclick = () => {
        //const demSurvey = document.querySelector("#dem");
        if (document.forms["dem"]["handedness"].value) localStorage.setItem('vgz-addapp-handedness', document.forms["dem"]["handedness"].value);
        // demo info copied over exactly
        // quiz info calculated here, value copied over
        const saveMsg = document.querySelector('#save-msg');
        saveMsg.classList.remove('hidden');
        // wait 5 seconds, then hide save msg
        setTimeout(() => { saveMsg.classList.add('hidden') }, 5000);
    }
}

window.onload = init;