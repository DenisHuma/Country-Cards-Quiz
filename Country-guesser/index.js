//OOP part, new to this, hope I don't screw it up too much

class Questions {
    constructor(question, A, B, C, rightanswer) {
        this.question = question;
        this.A = A;
        this.B = B;
        this.C = C;
        this.rightanswer = rightanswer;
    }
}

//importing some questions


questionsarray = [];
const Romania = new Questions('Which country has the largest fragment of Carpathian Mountains?', 'Romania', 'Bulgaria', 'France', 'Romania');
questionsarray.push(Romania);
const France = new Questions("Zinedine Zidane is from:", 'Belgium', 'Spain', 'France', 'France');
questionsarray.push(France);
const Germany = new Questions("Bayern Munchen is a great team from:", 'Poland', 'Germany', 'Czech Republic', 'Germany');
questionsarray.push(Germany);
const Belgium = new Questions("The greatest football team of 2022 according to FIFA:", 'Belgium', 'Croatia', 'England', 'Belgium');
questionsarray.push(Belgium);
const Moldova = new Questions("Has the capital at Chisinau", 'Serbia', 'Moldova', 'Hungary', 'Moldova');
questionsarray.push(Moldova);
const Greece = new Questions("Motherland of Aristotel", 'Croatia', 'Greece', 'Macedonia', 'Greece');
questionsarray.push(Greece);
//

//functions


function randomquestion(){
    let index = Math.floor(Math.random() * questionsarray.length);
    let classname = questionsarray[index];
    return classname;
}

let right = 'NA';

function buttonPlay(answerA, answerB, answerC){

    answerA.addEventListener('click', function(){
        answerA.style.background = 'purple';
        answerB.style.background = 'rgba(94, 92, 92, 0)';
        answerC.style.background = 'rgba(94, 92, 92, 0)';
        right = answerA.innerHTML;
    })

    answerB.addEventListener('click', function(){
        answerB.style.background = 'purple';
        answerA.style.background = 'rgba(94, 92, 92, 0)';
        answerC.style.background = 'rgba(94, 92, 92, 0)';
        right = answerB.innerHTML;
    })

    answerC.addEventListener('click', function(){
        answerC.style.background = 'purple';
        answerA.style.background = 'rgba(94, 92, 92, 0)';
        answerB.style.background = 'rgba(94, 92, 92, 0)';
        right = answerC.innerHTML;
    })
}

function questionCreate(classname, answerA, answerB, answerC, question){
     
    answerA.innerHTML = classname.A;
    answerB.innerHTML = classname.B;
    answerC.innerHTML = classname.C;
    question.innerHTML = classname.question;
    buttonPlay(answerA, answerB, answerC);
}

//
let classname = '1';

window.onload = function () {
    let playbutton = document.querySelector("#play-button");
    let card = document.querySelector('.home-card');
    let gameContainer = document.querySelector("#game-container");
    let gamecontainer2 = document.querySelector("#game-container2");
    let gamecontainer3 = document.querySelector("#game-container3");
    let gamecontainer4 = document.querySelector("#game-container4");
    let gamecontainer5 = document.querySelector("#game-container5");
    let gameend = document.querySelector("#game-end");
    let rightanswers = document.querySelector('#correct-answers');
    let wronganswers = document.querySelector("#wrong-answers");
    let scoreplus = 0;
    let scoreminus = 0;
    playbutton.addEventListener("click", function () {
        card.style.opacity = '0';
        classname = randomquestion();
        const myTimeout = setTimeout(displaychange, 500);
        function displaychange() {
            rightanswers.style.display='block';
            wronganswers.style.display='block';
            answerA = document.querySelector('#answerA');
             answerB = document.querySelector('#answerB');
            answerC = document.querySelector('#answerC');
            question = document.querySelector("#question");
            questionCreate(classname, answerA, answerB, answerC, question);
            card.style.display = 'none';
            gameContainer.style.display = 'grid';
            gameContainer.style.opacity = '1';
            gameContainer.style.alignItems = 'center';
            gameContainer.style.gridGap = '50px';
        }
    })

    


    let submitbutton = document.querySelector(".submit-answer-button");
    submitbutton.addEventListener("click", function () {
        gameContainer.style.transform = 'rotateY(180deg)';
        const myTimeout = setTimeout(displaychange3, 1000);
        function displaychange3() {
            if(right == classname.rightanswer){
                gameContainer.style.transform = 'translateX(100vw)';
                scoreplus +=1;
                rightanswers.innerHTML = `CORRECT: ${scoreplus}`;
            }
            else{
                gameContainer.style.transform = 'translateX(-100vw)';
                scoreminus +=1;
                wronganswers.innerHTML = `WRONG: ${scoreminus}`;
            }
            
        }
        const myTimeout2 = setTimeout(displaychange2, 1400);
        function displaychange2() {
            gameContainer.style.display = 'none';
            gamecontainer2.style.display = 'block';
        }
        let answerD = document.querySelector("#answerD");
        let answerE = document.querySelector("#answerE");
        let answerF = document.querySelector("#answerF");
        let question2 = document.querySelector("#question2");
        questionCreate(France, answerD, answerE, answerF, question2)

    })

    let submitbutton2 = document.querySelector(".submit-answer-button2");
    submitbutton2.addEventListener("click", function () {
        gamecontainer2.style.transform = 'rotateY(180deg)';
        const myTimeout = setTimeout(displaychange3, 1000);
        function displaychange3() {
            if(right == France.rightanswer){
                gamecontainer2.style.transform = 'translateX(100vw)';
                scoreplus +=1;
                rightanswers.innerHTML = `CORRECT: ${scoreplus}`;
            }
            else{
                gamecontainer2.style.transform = 'translateX(-100vw)';
                scoreminus +=1;
                wronganswers.innerHTML = `WRONG: ${scoreminus}`;
            }
            
        }
        const myTimeout2 = setTimeout(displaychange2, 1400);
        function displaychange2() {
            gamecontainer2.style.display = 'none'; 
            gamecontainer3.style.display = 'block'; 
        }
        let answerG = document.querySelector("#answerG");
        let answerH = document.querySelector("#answerH");
        let answerI = document.querySelector("#answerI");
        let question3 = document.querySelector("#question3");
        questionCreate(Romania, answerG, answerH, answerI, question3)
    })

    let submitbutton3 = document.querySelector(".submit-answer-button3");
    submitbutton3.addEventListener("click", function () {
        gamecontainer3.style.transform = 'rotateY(180deg)';
        const myTimeout = setTimeout(displaychange3, 1000);
        function displaychange3() {
            if(right == Romania.rightanswer){
                gamecontainer3.style.transform = 'translateX(100vw)';
                scoreplus +=1;
                rightanswers.innerHTML = `CORRECT: ${scoreplus}`;
            }
            else{
                gamecontainer3.style.transform = 'translateX(-100vw)';
                scoreminus +=1;
                wronganswers.innerHTML = `WRONG: ${scoreminus}`;
            }
            
        }
        const myTimeout2 = setTimeout(displaychange2, 1400);
        function displaychange2() {
            gamecontainer3.style.display = 'none'; 
            gamecontainer4.style.display = 'block'; 
        }
        let answerJ = document.querySelector("#answerJ");
        let answerK = document.querySelector("#answerK");
        let answerL = document.querySelector("#answerL");
        let question4 = document.querySelector("#question4");
        questionCreate(Germany, answerJ, answerK, answerL, question4)
    })

    let submitbutton4 = document.querySelector(".submit-answer-button4");
    submitbutton4.addEventListener("click", function () {
        gamecontainer4.style.transform = 'rotateY(180deg)';
        const myTimeout = setTimeout(displaychange3, 1000);
        function displaychange3() {
            if(right == Germany.rightanswer){
                gamecontainer4.style.transform = 'translateX(100vw)';
                scoreplus +=1;
                rightanswers.innerHTML = `CORRECT: ${scoreplus}`;
            }
            else{
                gamecontainer4.style.transform = 'translateX(-100vw)';
                scoreminus +=1;
                wronganswers.innerHTML = `WRONG: ${scoreminus}`;
            }
            
        }
        const myTimeout2 = setTimeout(displaychange2, 1400);
        function displaychange2() {
            gamecontainer4.style.display = 'none'; 
            gamecontainer5.style.display = 'block'; 
        }
        let answerM = document.querySelector("#answerM");
        let answerN = document.querySelector("#answerN");
        let answerO = document.querySelector("#answerO");
        let question5 = document.querySelector("#question5");
        questionCreate(Belgium, answerM, answerN, answerO, question5)
    })

    let submitbutton5 = document.querySelector(".submit-answer-button5");
    submitbutton5.addEventListener("click", function () {
        gamecontainer5.style.transform = 'rotateY(180deg)';
        const myTimeout = setTimeout(displaychange3, 1000);
        function displaychange3() {
            if(right == Belgium.rightanswer){
                gamecontainer5.style.transform = 'translateX(100vw)';
                scoreplus +=1;
                rightanswers.innerHTML = `CORRECT: ${scoreplus}`;
            }
            else{
                gamecontainer5.style.transform = 'translateX(-100vw)';
                scoreminus +=1;
                wronganswers.innerHTML = `WRONG: ${scoreminus}`;
            }
            
        }
        const myTimeout2 = setTimeout(displaychange2, 1400);
        function displaychange2() {
            gamecontainer5.style.display = 'none'; 
            gameend.style.display = 'block'; 
            let numberright = document.querySelector("#number-right");
            let numberwrong = document.querySelector("#number-wrong");
            numberright.innerHTML = scoreplus;
            numberwrong.innerHTML = scoreminus;
        }
        
    })

}

