

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".optionBtn");
const playAgainBtn = document.querySelector("#play-again");
const startBtn = document.querySelector("#start");
const btnContainer = document.querySelector(".buttons-container");

const playerChoose = document.querySelector("#player-selection");
const computerChoose = document.querySelector("#computer-selection");
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");

const finalResult = document.querySelector("#final-result");
const uiContainer = document.querySelector(".UI-container");
const welcomeMsg = document.querySelector(".start-container");

const playerImg = document.querySelector(".player-img");
const computerImg = document.querySelector(".computer-img");
const playerParent = document.querySelector(".player-display");
const computerParent = document.querySelector(".computer-display");

uiContainer.style.display = "none";                                                                                // Game UI disabled, unless 'Start' button is clicked

gameStart = () => {                                                                                                
  startBtn.addEventListener("click", () => {                                                                       // Displays game UI after 'Start' button has been clicked
    uiContainer.style.display = "initial";    
    welcomeMsg.style.display = "none";
    startBtn.style.display = "none";
    playAgainBtn.style.display = "none";
  });
};
gameStart();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.id;                                                                             // Player selection
    playerChoose.textContent = `You selected: ${playerSelection}`;                                                 
    computerChoose.textContent = `Computer selected: ${getComputerChoice()}`;
    playRound(playerSelection, computerSelection);
    displayImage(playerSelection, computerSelection);
    gameEnd();
    playerImg.style.display = "initial";
    computerImg.style.display = "initial";
  });
});

getComputerChoice = () => {                                                                                        
  const options = ["Rock", "Paper", "Scissors"];
  return computerSelection = options[Math.floor(Math.random() * options.length)];                                  // Computer selection
};

playRound = (playerSelection, computerSelection) => {                                                              // Outcomes if player wins
  if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    player.textContent = `Your score: ${playerScore}`;
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;

  } else if (playerSelection === "Rock" && computerSelection === "Paper"                                           // Outcomes if computer wins
    || playerSelection === "Paper" && computerSelection === "Scissors" 
    || playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    computer.textContent = `Computer score: ${computerScore}`;
    roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;

  } else {                                                                                                         // Outcome if player and computer have the same selection
    roundResult.textContent = `It's a draw! You both have ${playerSelection}.`
  };
};

displayImage = (playerSelection, computerSelection) => {
  if (playerSelection === "Scissors") { playerImg.src = "img/Scissors.png"; playerParent.appendChild(playerImg); } else if 
    (playerSelection === "Paper") { playerImg.src = "img/Paper.png"; playerParent.appendChild(playerImg); } else if 
    (playerSelection === "Rock") { playerImg.src = "img/Rock.png"; playerParent.appendChild(playerImg); };

  if (computerSelection === "Scissors") { computerImg.src = "img/Scissors.png"; computerParent.appendChild(computerImg); } else if
    (computerSelection === "Paper") { computerImg.src = "img/Paper.png"; computerParent.appendChild(computerImg); } else if 
    (computerSelection === "Rock") { computerImg.src = "img/Rock.png"; computerParent.appendChild(computerImg); };
};

gameEnd = () => {
  if (playerScore === 5) {
    finalResult.textContent = "Congratulations! You won the game.";
    finalResult.style.color = "rgb(5, 48, 8)";
    btnContainer.style.display = "none";
    playAgainBtn.style.display = "initial"; 
  } else if (computerScore === 5) {
    finalResult.textContent = "You lost the game! Better luck next time.";
    finalResult.style.color = "rgb(101, 0, 0)";
    btnContainer.style.display = "none";
    playAgainBtn.style.display = "initial";
  };
};

playAgainGame = () => {                                                                                              // Restart the game                             
  playAgainBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    player.textContent = `Your score: ${playerScore}`;
    computer.textContent = `Computer score: ${computerScore}`;
    playerChoose.textContent = "";
    computerChoose.textContent = "";
    roundResult.textContent = "";
    finalResult.textContent = "";
    btnContainer.style.display = "initial";
    btnContainer.style.cssText = "display: flex; justify-content: center; gap: 50px;";
    playAgainBtn.style.display = "none";
    playerImg.style.display = "none";
    computerImg.style.display = "none";
  });
};
playAgainGame();