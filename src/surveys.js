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

    enDem += `<label for="lang">Dominant Language:</label>`;
    input = `<input type="text" id="lang"><br><br>`;
    enDem += input;

    enDem += `<label for="sex">Sex:</label>`;
    input = `<input type="radio" name="sex" id="sex-m" value='male'><label for="sex-m">Male</label>
    <input type="radio" name="sex" id="sex-f" value='female'><label for="sex-f">Female</label>
    <input type="radio" name="sex" id="sex-o" value='other'><label for="sex-o">Other</label><br><br>`;
    enDem += input;

    enDem += `<label for="handedness">Dominant Hand:</label>`;
    input = `<input type="radio" name="handedness" id="handedness-l" value='left'><label for="handedness-l">Left</label>
    <input type="radio" name="handedness" id="handedness-a" value='ambidextrous'><label for="handedness-a">Ambidextrous</label>
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
    enGuq += `<h3>Survey 1</h3>`;
    itGuq += `<h3>Indagine 1</h3>`;
    //#region q1
    enGuq += `<hr><h4>Please rate how strong your desire was to gamble <u>during the last 24 hours</u>:</h4>
        <div class="survey-question">
            <input type="radio" name="guq-q1" value="0" id="guq-q1-0">
            <label for="guq-q1-0">0 (Not at all)</label>`;
    for(let i=1; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q1" value="${i}" id="guq-q1-${i}">
            <label for="guq-q1-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q1" value="10" id="guq-q1-10">
            <label for="guq-q1-10">10 (Extremely high)</label>
        </div>`;

    itGuq += `<hr><h4>Indichi quanto è stato intenso il suo desiderio di giocare d'azzardo nelle ultime 24 ore:</h4>
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
    enGuq += `<hr><h4>Please rate how strong your desire was <u>not</u> to gamble <u>during the last 24 hours</u>:</h4>
        <div class="survey-question">
            <input type="radio" name="guq-q2" value="0" id="guq-q2-0">
            <label for="guq-q2-0">0 (Not at all)</label>`;
    for(let i=1; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q2" value="${i}" id="guq-q2-${i}">
            <label for="guq-q2-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q2" value="10" id="guq-q2-10">
            <label for="guq-q2-10">10 (Extremely high)</label>
        </div>`;
    itGuq += `<hr><h4>Indichi quanto è stato intenso il suo desiderio di NON giocare d'azzardo nelle ultime 24 ore:</h4>
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
    enGuq += `<hr><h4>Please rate your confidence in your ability to <u>resist</u> gambling <u>today</u>:</h4>
        <div class="survey-question">
            <input type="radio" name="guq-q3" value="0" id="guq-q3-0">
            <label for="guq-q3-0">0 (I'm sure I'll gamble)</label>`;
    for(let i=1; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q3" value="${i}" id="guq-q3-${i}">
            <label for="guq-q3-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q3" value="10" id="guq-q3-10">
            <label for="guq-q3-10">10 (I'm sure I'll resist)</label>
        </div>`;
    itGuq += `<hr><h4>Valuti la sua sicurezza nella sua capacità di resistere a giocare d'azzardo oggi:</h4>
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
    enGuq += `<hr><h4>Please rate the likelihood that you will gamble <u>in the next week</u>:</h4>
        <div class="survey-question">
            <input type="radio" name="guq-q4" value="0" id="guq-q4-0">
            <label for="guq-q4-0">0 (I'm sure I won't gamble)</label>`;
    for(let i=1; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q4" value="${i}" id="guq-q4-${i}">
            <label for="guq-q4-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q4" value="10" id="guq-q4-10">
            <label for="guq-q4-10">10 (I'm sure I will gamble)</label>
        </div>`;
    itGuq += `<hr><h4>Valuti la probabilità di giocare d'azzardo durante la prossima settimana:</h4>
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
    enGuq += `<hr><h4>Please imagine yourself in the environment in which you previously gambled (e.g., a casino, racetrack, or whatever most strongly reminds you of gambling). <u>If you 
    were this environment today, what is the likelihood that you would gamble?</u></h4>
        <div class="survey-question">
            <input type="radio" name="guq-q5" value="0" id="guq-q5-0">
            <label for="guq-q5-0">0 (Not at all)</label>`;
    for(let i=1; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q5" value="${i}" id="guq-q5-${i}">
            <label for="guq-q5-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q5" value="10" id="guq-q5-10">
            <label for="guq-q5-10">10 (Extremely high)</label>
        </div>`;
    itGuq += `<hr><h4>Provi a immaginarsi nel contesto in cui solitamente gioca d'azzardo (ad es. casino, slot machine, corse su pista, 
        o qualsiasi esempio la riconduce più intensamente al gioco d'azzardo). Se si trocasse in questo contesto OGGI, con quale 
        probabilità giocherebbe d'azzardo?</h4>
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
    enGuq += `<hr><h4>Please rate how strong your urges to gamble are when something in the environment reminds you of it (e.g., watching a sports game, seeing a slot machine, a certain smell, etc.)</h4>
        <div class="survey-question">
            <input type="radio" name="guq-q6" value="0" id="guq-q6-0">
            <label for="guq-q6-0">0 (Not at all)</label>`;
    for(let i=1; i<10; i++) {
        enGuq += `<input type="radio" name="guq-q6" value="${i}" id="guq-q6-${i}">
            <label for="guq-q6-${i}">${i}</label>`;
    }
    enGuq += `<input type="radio" name="guq-q6" value="10" id="guq-q6-10">
            <label for="guq-q6-10">10 (Extremely high)</label>
        </div>`;
    itGuq += `<hr><h4>Valuti quanto è forte il desiderio di giocare d'azzardo quando si trova di fronte a qualche elemento che glielo 
    ricorda (ad es. guardare una partita di uno sport, vedere una slot machine, un certo odore, ecc.):</h4>
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
// https://doi.org/10.1002/1097-4679(199511)51:6<768::AID-JCLP2270510607>3.0.CO;2-1

// 24 total q
const fillBis = () => {
    const enAnswers = ['N/A', 'Rarely/Never', 'Occasionally', 'Often', 'Almost Always/Always'];
    const itAnswers = ['N/A', 'Raramente/Non Mai', 'Ogni Tanto', 'Spesso', 'Quasi Sempre/Sempre'];
    enBis += `<h3>Survey 2</h3>`;
    itBis += `<h3>Indagine 2</h3>`;
    //#region q1
    enBis += `<hr><h4>I plan tasks carefully</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Pianifico attentamente le compite</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q1" value="${i}" id="bis-q1-${i}">
            <label for="bis-q1-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q1" value="${i}" id="bis-q1-${i}">
        <label for="bis-q1-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q1
    //#region q2
    enBis += `<hr><h4>I do things without thinking</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Faccio le cose senza pensare</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q2" value="${i}" id="bis-q2-${i}">
            <label for="bis-q2-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q2" value="${i}" id="bis-q2-${i}">
        <label for="bis-q2-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q2
    //#region q3
    enBis += `<hr><h4>I am happy-go-lucky</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Sono spensierato</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q3" value="${i}" id="bis-q3-${i}">
            <label for="bis-q3-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q3" value="${i}" id="bis-q3-${i}">
        <label for="bis-q3-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q3
    //#region q4
    enBis += `<hr><h4>I have "racing" thoughts</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Ho pensieri che "si rincorrono"</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q4" value="${i}" id="bis-q4-${i}">
            <label for="bis-q4-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q4" value="${i}" id="bis-q4-${i}">
        <label for="bis-q4-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q4
    //#region q5
    enBis += `<hr><h4>I plan trips well ahead of time</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Pianifico i miei viaggi con largo anticipo</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q5" value="${i}" id="bis-q5-${i}">
            <label for="bis-q5-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q5" value="${i}" id="bis-q5-${i}">
        <label for="bis-q5-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q5
    //#region q6
    enBis += `<hr><h4>I am self controlled</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Ho l'autocontrollo</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q6" value="${i}" id="bis-q6-${i}">
            <label for="bis-q6-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q6" value="${i}" id="bis-q6-${i}">
        <label for="bis-q6-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q6
    //#region q7
    enBis += `<hr><h4>I concentrate easily</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Concentro facilmente</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q7" value="${i}" id="bis-q7-${i}">
            <label for="bis-q7-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q7" value="${i}" id="bis-q7-${i}">
        <label for="bis-q7-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q7
    //#region q8
    enBis += `<hr><h4>I save regularly</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Salvo regolarmente</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q8" value="${i}" id="bis-q8-${i}">
            <label for="bis-q8-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q8" value="${i}" id="bis-q8-${i}">
        <label for="bis-q8-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q8
    //#region q9
    enBis += `<hr><h4>I am a careful thinker</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Sono un pensatore attento</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q9" value="${i}" id="bis-q9-${i}">
            <label for="bis-q9-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q9" value="${i}" id="bis-q9-${i}">
        <label for="bis-q9-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q9
    //#region q10
    enBis += `<hr><h4>I plan for job security</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Pianifico per la sicurezza del lavoro</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q10" value="${i}" id="bis-q10-${i}">
            <label for="bis-q10-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q10" value="${i}" id="bis-q10-${i}">
        <label for="bis-q10-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q10
    //#region q11
    enBis += `<hr><h4>I say things without thinking</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Parlo senza pensare</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q11" value="${i}" id="bis-q11-${i}">
            <label for="bis-q11-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q11" value="${i}" id="bis-q11-${i}">
        <label for="bis-q11-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q11
    //#region q12
    enBis += `<hr><h4>I like to think about complex problems</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Mi piace pensare a problemi complessi</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q12" value="${i}" id="bis-q12-${i}">
            <label for="bis-q12-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q12" value="${i}" id="bis-q12-${i}">
        <label for="bis-q12-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q12
    //#region q13
    enBis += `<hr><h4>I change jobs</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Cambio lavoro</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q13" value="${i}" id="bis-q13-${i}">
            <label for="bis-q13-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q13" value="${i}" id="bis-q13-${i}">
        <label for="bis-q13-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q13
    //#region q14
    enBis += `<hr><h4>I act "on impulse"</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Agisco "d'impulso"</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q14" value="${i}" id="bis-q14-${i}">
            <label for="bis-q14-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q14" value="${i}" id="bis-q14-${i}">
        <label for="bis-q14-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q14
    //#region q15
    enBis += `<hr><h4>I get easily bored when solving thought problems</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Mi annoio facilmente quando risolvo problemi di pensiero</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q15" value="${i}" id="bis-q15-${i}">
            <label for="bis-q15-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q15" value="${i}" id="bis-q15-${i}">
        <label for="bis-q15-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q15
    //#region q16
    enBis += `<hr><h4>I act on the spur of the moment</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Agisco di impulso del momento</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q16" value="${i}" id="bis-q16-${i}">
            <label for="bis-q16-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q16" value="${i}" id="bis-q16-${i}">
        <label for="bis-q16-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q16
    //#region q17
    enBis += `<hr><h4>I am a steady thinker</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Sono un pensatore calmo</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q17" value="${i}" id="bis-q17-${i}">
            <label for="bis-q17-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q17" value="${i}" id="bis-q17-${i}">
        <label for="bis-q17-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q17
    //#region q18
    enBis += `<hr><h4>I change where I live</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Cambio residenza</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q18" value="${i}" id="bis-q18-${i}">
            <label for="bis-q18-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q18" value="${i}" id="bis-q18-${i}">
        <label for="bis-q18-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q18
    //#region q19
    enBis += `<hr><h4>I buy things on impulse</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Compro le cose d'impulso</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q19" value="${i}" id="bis-q19-${i}">
            <label for="bis-q19-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q19" value="${i}" id="bis-q19-${i}">
        <label for="bis-q19-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q19
    //#region q20
    enBis += `<hr><h4>I spend or charge more than I earn</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Spendo o addebito più di quanto guadagno</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q20" value="${i}" id="bis-q20-${i}">
            <label for="bis-q20-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q20" value="${i}" id="bis-q20-${i}">
        <label for="bis-q20-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q20
    //#region q21
    enBis += `<hr><h4>I have outside thoughts when thinking</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Ho spesso pensieri estranei quando penso</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q21" value="${i}" id="bis-q21-${i}">
            <label for="bis-q21-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q21" value="${i}" id="bis-q21-${i}">
        <label for="bis-q21-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q21
    //#region q22
    enBis += `<hr><h4>I am more interested in the present than the future</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Sono più interessato al presente che al futuro</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q22" value="${i}" id="bis-q22-${i}">
            <label for="bis-q22-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q22" value="${i}" id="bis-q22-${i}">
        <label for="bis-q22-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q22
    //#region q23
    enBis += `<hr><h4>I am restless at lectures or talks</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Sono irrequieto a teatro o in classe</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q23" value="${i}" id="bis-q23-${i}">
            <label for="bis-q23-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q23" value="${i}" id="bis-q23-${i}">
        <label for="bis-q23-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q23
    //#region q24
    enBis += `<hr><h4>I plan for the future</h4>
        <div class="survey-question">`; 
    itBis += `<hr><h4>Sono orientato al futuro</h4>
    <div class="survey-question">`;
    for(let i=1; i<5; i++) {
        enBis += `<input type="radio" name="bis-q24" value="${i}" id="bis-q24-${i}">
            <label for="bis-q24-${i}">${enAnswers[i]}</label>`;
        itBis += `<input type="radio" name="bis-q24" value="${i}" id="bis-q24-${i}">
        <label for="bis-q24-${i}">${itAnswers[i]}</label></div>`;
    }
    enBis += `</div>`;
    //#endregion q24
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
        // save all demographic information
        if (document.forms["dem"]["f-name"].value && document.forms["dem"]["l-name"].value) localStorage.setItem('vgz-addapp-dem-name', `${document.forms["dem"]["f-name"].value} ${document.forms["dem"]["l-name"].value}`);
        if (document.forms["dem"]["age"].value) localStorage.setItem('vgz-addapp-dem-age', document.forms["dem"]["age"].value);
        if (document.forms["dem"]["sex"].value) localStorage.setItem('vgz-addapp-dem-sex', document.forms["dem"]["sex"].value);
        if (document.forms["dem"]["lang"].value) localStorage.setItem('vgz-addapp-dem-lang', document.forms["dem"]["lang"].value);
        if (document.forms["dem"]["handedness"].value) localStorage.setItem('vgz-addapp-handedness', document.forms["dem"]["handedness"].value);
        if (document.forms["dem"]["device-type"].value) localStorage.setItem('vgz-addapp-dem-devicetype', document.forms["dem"]["device-type"].value);
        if (document.forms["dem"]["device-os"].value) localStorage.setItem('vgz-addapp-dem-deviceos', document.forms["dem"]["device-os"].value);
        if (document.forms["dem"]["device-input"].value) localStorage.setItem('vgz-addapp-deviceinput', document.forms["dem"]["device-input"].value);

        // Quiz info calculated here, value copied over
        // Saving GUQ Results
        try {
            let guqResult = Math.floor(document.forms["guq"]["guq-q1"].value);
            guqResult += 20 - Math.floor(document.forms["guq"]["guq-q2"].value) - Math.floor(document.forms["guq"]["guq-q3"].value);
            for(let i = 4; i < 7; i++)
            {
                guqResult += Math.floor(document.forms["guq"][`guq-q${i}`].value);
            }
            localStorage.setItem('vgz-addapp-guqscore', guqResult);
        } catch (e) {
            //console.log(e);
            const survey1error = document.querySelector('#survey1-error-msg');
            survey1error.classList.remove('hidden');
            setTimeout(() => { survey1error.classList.add('hidden') }, 5000);
        }

        // Saving BIS Results
        try {
            const bisReversals = [2, 3, 4, 11, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23];
            let bisResult = 5 - Math.floor(document.forms["bis"]["bis-q1"].value);
            for(let i = 2; i < 25; i++)
            {
                if(!bisReversals.includes(i)) bisResult += 5 - Math.floor(document.forms["bis"][`bis-q${i}`].value);
                else bisResult += Math.floor(document.forms["bis"][`bis-q${i}`].value);
            }
            localStorage.setItem('vgz-addapp-bisscore', bisResult);
        } catch (e) {
            console.log(e);
            const survey2error = document.querySelector('#survey2-error-msg');
            survey2error.classList.remove('hidden');
            setTimeout(() => { survey2error.classList.add('hidden') }, 5000);
        }

        const saveMsg = document.querySelector('#save-msg');
        saveMsg.classList.remove('hidden');
        // wait 5 seconds, then hide save msg
        setTimeout(() => { saveMsg.classList.add('hidden') }, 5000);
    }
}

window.onload = init;