function createRandomMove(){
    const randomNumber = Math.floor(Math.random() *3+1);
    
    if(randomNumber === 1) return 'rock';

    else if(randomNumber === 2) return 'scissors';

    else if(randomNumber === 3) return 'paper';
    
    }

function displayMoves(playersMove, computersMove){
    const playersMoveDiv = document.querySelector("#players-move");
    const computersMoveDiv = document.querySelector("#computers-move");
    playersMoveDiv.innerHTML = playersMove;
    computersMoveDiv.innerHTML = computersMove;

}

function displayResult(playersMove, computersMove){
    const resultDiv = document.querySelector("#result");

    if(playersMove === computersMove) {
            resultDiv.style.color = "purple";
            resultDiv.innerHTML = 'draw';
    }
    else if (playersMove === "paper"
        && computersMove === "scissors"){
            resultDiv.style.color = "red"; 
            resultDiv.innerHTML = 'you lost';
    }
    else if (playersMove === "rock"
        && computersMove === "paper") {
            resultDiv.style.color = "red"; 
            resultDiv.innerHTML = 'you lost';
    }
    else if (playersMove === "scissors"
        && computersMove === "rock") {
            resultDiv.style.color = "red"; 
            resultDiv.innerHTML = 'you lost';
    }
    else {
            resultDiv.style.color = "green"; 
            resultDiv.innerHTML = 'you won';
    }

}