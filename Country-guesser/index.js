
window.onload=function(){
    let playbutton = document.querySelector("#play-button");
   let card = document.querySelector('.home-card');
   let gameContainer = document.querySelector("#game-container");
playbutton.addEventListener("click", function(){
    card.style.opacity = '0';
    const myTimeout = setTimeout(displaychange, 500);
    function displaychange(){
        card.style.display='none';
        gameContainer.style.display='grid';
        gameContainer.style.opacity='1';

        gameContainer.style.alignItems='center';
        gameContainer.style.gridGap='50px';
    }
})


let submitbutton = document.querySelector(".submit-answer-button");
submitbutton.addEventListener("click", function(){
    gameContainer.style.transform='rotateY(180deg)';   
    const myTimeout = setTimeout(displaychange, 1000);
    function displaychange(){
        gameContainer.style.transform='translateX(100vw)';   
    }
    const myTimeout2 = setTimeout(displaychange2, 1400);
    function displaychange2(){
        gameContainer.style.display='none';   
    }
    
    
})


}

