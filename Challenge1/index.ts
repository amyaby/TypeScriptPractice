const rockBtn = document.getElementById('rock');

if (rockBtn) {
    rockBtn.onclick = (ev: MouseEvent) => {
        const computerChoice = getComputerChoice();
        showResult('rock', computerChoice);
    }
}
const paperBtn = document.getElementById('paper');

if (paperBtn) {
    paperBtn.onclick = (ev: MouseEvent) => {
        const computerChoice = getComputerChoice();
        showResult('paper', computerChoice);
    }
}
const scissBtn = document.getElementById('scissors');

if (scissBtn) {
    scissBtn.onclick = (ev: MouseEvent) => {
        const computerChoice = getComputerChoice();
        showResult('scissors', computerChoice);
    }
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
function showResult(userChoice: string, computerChoice: string) {
    const choices = `Computer: ${computerChoice} VS Me: ${userChoice}`;
    
    if (userChoice === computerChoice) {
        alert(`It's a tie! \n${choices}`);
    }else if(
        (userChoice === 'rock' && computerChoice === 'scissors')||
        (userChoice === 'paper' && computerChoice === 'rock')||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        alert(`Ahsantttt YOU WIN A SAAAT \n${choices}`);
    }else{
        alert(`You lose a lmejnouuuun!  \n${choices}`);
    }
}