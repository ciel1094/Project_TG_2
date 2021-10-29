const GAME_TIME = 20;

let score = 0;
let time = GAME_TIME;
let inplaying = false;
let timeInterval;
let cheakInterval;
let words = [];

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
    getWords();
    wordInput.addEventListener('input', checkMatch)

}

function run(){
    isPlaying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    cheakInterval = setInterval(checkStatus, 50)
}



function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange('게임 시작')
        clearInterval(cheakInterval)
    }
}

// words = ['acrylonitrilebutadienestyrene', 'buckminsterfullerene', 'chlorobenzylidenemalononitrile', 'dichlorodiphenyltrichloroethane', 'electroencephalographic', 'firstcomefirstserve', 'glottochronological', 'hyperbetalipoproteinemia', 'immunoelectrophoresis', 'jurisprudentially', 'kissmeoverthegardengate', 'laryngotracheobronchitis', 'methylenedioxymethamphetamine', 'noninstitutionalised', 'onehundredthousandth', 'pneumonoultramicroscopicsilicovolcanoconiosis', 'quatercentennial', 'radiocommunication', 'schizosaccharomycetaceae', 'tetrabromophenolsulfonephthalein', 'uvulopalatopharyngoplasty', 'valetudinarianism', 'watermelonshaped', 'xenotransplantation', 'yeniseisamoyed', 'zannichelliaceae']
function getWords(){
    words = ['acrylonitrilebutadienestyrene', 'buckminsterfullerene', 'chlorobenzylidenemalononitrile', 'dichlorodiphenyltrichloroethane', 'electroencephalographic', 'firstcomefirstserve', 'glottochronological', 'hyperbetalipoproteinemia', 'immunoelectrophoresis', 'jurisprudentially', 'kissmeoverthegardengate', 'laryngotracheobronchitis', 'methylenedioxymethamphetamine', 'noninstitutionalised', 'onehundredthousandth', 'pneumonoultramicroscopicsilicovolcanoconiosis', 'quatercentennial', 'radiocommunication', 'schizosaccharomycetaceae', 'tetrabromophenolsulfonephthalein', 'uvulopalatopharyngoplasty', 'valetudinarianism', 'watermelonshaped', 'xenotransplantation', 'yeniseisamoyed', 'zannichelliaceae']
    buttonChange('게임 시작')
}
    
    function checkMatch () {
        if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
            wordInput.value = "";
            if(!isPlaying) {
                return;
            }
            score++;
            scoreDisplay.innerText = score;
            time = GAME_TIME;
            const randomIndex = Math.floor(Math.random() * words.length);
            wordDisplay.innerText = words[randomIndex]
        }
    }




function countDown(){
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
}

function buttonChange(text){
    button.innerText = text;
    text === '게임 시작' ? button.classList.remove('loading') : button.classList.add('loading')
}