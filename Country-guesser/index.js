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

const Romania = new Questions('Which country has the largest fragment of Carpathian Mountains?', 'Romania', 'Bulgaria', 'France', 'Romania');
const France = new Questions("Zinedine Zidane is from:", 'Belgium', 'Spain', 'France', 'France');
//

//functions

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


window.onload = function () {
    let playbutton = document.querySelector("#play-button");
    let card = document.querySelector('.home-card');
    let gameContainer = document.querySelector("#game-container");
    let rightanswers = document.querySelector('#correct-answers');
    let wronganswers = document.querySelector("#wrong-answers");
    let scoreplus = 0;
    let scoreminus = 0;
    let gamecontainer2 = document.querySelector("#game-container2");
    playbutton.addEventListener("click", function () {
        card.style.opacity = '0';
        const myTimeout = setTimeout(displaychange, 500);
        function displaychange() {
            let questionNumber = document.querySelector("#question-number");
            questionNumber.innerHTML = 'Question 1';
            rightanswers.style.display='block';
            wronganswers.style.display='block';
            answerA = document.querySelector('#answerA');
             answerB = document.querySelector('#answerB');
            answerC = document.querySelector('#answerC');
            question = document.querySelector("#question");
            questionCreate(Romania, answerA, answerB, answerC, question);
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
            if(right == Romania.rightanswer){
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
        }
    })

}

