let user_score = 0;
let comp_score = 0;
const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
   const rand= Math.floor(Math.random() *3);
    return options[rand];
}

const drawgame = ()=>{
    msg.innerText="Gamewas Draw, Play Again";
    msg.style.backgroundColor="#192A51";
}

const playgame = (userchoice) =>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame();        
    }
    else{
        let userwin= true;
        if( userchoice==="rock"){
            userwin= compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin= compchoice==="scissor"?false:true;
        }
        else{
            userwin= compchoice==="rock"?false:true;0
        }

        showWinner( userwin,userchoice,compchoice);
    }
};

const showWinner= (userwin,userchoice,compchoice)=>{
    if(userwin){ 
        user_score++;
        userScore.innerText=user_score;
        msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp_score++;
        compScore.innerText=comp_score;
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

choices.forEach((choice) =>{
choice.addEventListener("click",() =>{
    const userchoice= choice.getAttribute("id");
    playgame(userchoice);
});
});