var rockBtn = document.getElementById('rock');
if (rockBtn) {
    rockBtn.onclick = function (ev) {
        var computerChoice = getComputerChoice();
        showResult('rock', computerChoice);
    };
}
var paperBtn = document.getElementById('paper');
if (paperBtn) {
    paperBtn.onclick = function (ev) {
        var computerChoice = getComputerChoice();
        showResult('paper', computerChoice);
    };
}
var scissBtn = document.getElementById('scissors');
if (scissBtn) {
    scissBtn.onclick = function (ev) {
        var computerChoice = getComputerChoice();
        showResult('scissors', computerChoice);
    };
}
function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function showResult(userChoice, computerChoice) {
    var choices = "Computer: ".concat(computerChoice, " VS Me: ").concat(userChoice);
    if (userChoice === computerChoice) {
        alert("It's a tie! \n".concat(choices));
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        alert("Ahsantttt YOU WIN A SAAAT \n".concat(choices));
    }
    else {
        alert("You lose a lmejnouuuun!  \n".concat(choices));
    }
}
