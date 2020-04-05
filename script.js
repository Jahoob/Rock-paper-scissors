var playerScore = document.getElementById('score-0').textContent = '0';
var computerScore = document.getElementById('score-1').textContent = '0';
var outcome = document.querySelector('.outcome');
var rock, paper, scissors;

var computerChoice = randomNumber(1, 3);
if (computerChoice === 1) {
    computerChoice = 'rock';
} else if (computerChoice === 2) {
    computerChoice = 'paper'
} else {
    computerChoice = 'scissors'
}

function randomNumber(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(computerChoice);


function game() {
    var computerChoice = 
}



function main() {
    paper.addEventListener('click', function () {

    })
}





function win(plyerChoice, computerChoice) {
    userScore++;
    document.getElementById('score - 0').innerHTML = userScore;
    document.getElementById('score-1').innerHTML = computerScore;
    outcome.innerHTML = document.querySelector(computerChoice + 'janko');

}

console.log(win);







// document.getElementById('paper').addEventListener('click', function () {
//     document.getElementById('paper').style.height = '250px'
// })


// document.querySelectorAll('.rock, .paper, .scissors').addEventListener('click', function () {
//     var rock = document.getElementById('rock')
//     var paper = document.getElementById('paper')
//     var scissors = document.getElementById('scissors')


//     randomNumber();

//     if (computerChoice() = 'rock') {
//         document.querySelector('#score-0').textContent = '12121'
//     }

// });



