let playerScore = 0;
let computerScore = 0;
const playerScore_active = document.getElementById('score-0');
const computerScore_active = document.getElementById('score-1');
const score = document.querySelector('.content');
const outcome = document.querySelector('.outcome');
const rock_icon = document.getElementById('rock');
const paper_icon = document.getElementById('paper');
const scissors_icon = document.getElementById('scissors');


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'rock';
    if (letter === 'p') return 'paper';
    return 'scissors';
}

function win(playerChoice, computerChoice) {
    const smallPlayerScore = 'player'.fontsize(3).sup();
    const smallComputerScore = 'comp'.fontsize(3).sup();
    const playerChoice_div = document.getElementById(playerChoice);
    playerScore++;
    playerScore_active.innerHTML = playerScore;
    computerScore_active.innerHTML = computerScore;
    outcome.innerHTML = `${convertToWord(playerChoice)}${smallPlayerScore} beats ${convertToWord(computerChoice)}${smallComputerScore}. You win!`;
    playerChoice_div.classList.add('green-glow');
    setTimeout(() => playerChoice_div.classList.remove('green-glow'), 300);
}

function lose(playerChoice, computerChoice) {
    const smallPlayerScore = 'player'.fontsize(3).sup();
    const smallComputerScore = 'comp'.fontsize(3).sup();
    // const playerChoice_div = document.getElementById(playerChoice);
    computerScore++;
    playerScore_active.innerHTML = playerScore;
    computerScore_active.innerHTML = computerScore;
    outcome.innerHTML = `${convertToWord(playerChoice)}${smallPlayerScore} loses to ${convertToWord(computerChoice)}${smallComputerScore}. You lose!`;
    // playerChoice_div.classList.add('red-glow');
    // setTimeout(() => playerChoice_div.classList.remove('red-glow'), 300);
}

function draw(playerChoice, computerChoice) {
    // const playerChoice_div = document.getElementById(playerChoice);
    const smallPlayerScore = 'player'.fontsize(3).sup();
    const smallComputerScore = 'comp'.fontsize(3).sup();
    outcome.innerHTML = `${convertToWord(playerChoice)}${smallPlayerScore} equals ${convertToWord(computerChoice)}${smallComputerScore}. It's a draw!`;
    // playerChoice_div.classList.add('gray-glow');
    // setTimeout(() => playerChoice_div.classList.remove('gray-glow'), 300);
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(playerChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(playerChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(playerChoice, computerChoice);
            break;
    }
}

function main() {
    rock_icon.addEventListener('click', () => game('r'))
    paper_icon.addEventListener('click', () => game('p'))
    scissors_icon.addEventListener('click', () => game('s'))
}

main();

let h1 = document.getElementById('outcome');
h1.insertAdjacentHTML('afterend',
    '<p class="result">PLAYE111</p>');
document.write(smallPlayerScore.fontsize(1));