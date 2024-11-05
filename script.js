let playerScore = 0;
let computerScore = 0;

function startGame() {
    const playerName = document.getElementById('player-name').value;
    if (playerName.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    document.getElementById('name-input').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('welcome-message').textContent = `Welcome, ${playerName}!`;
    document.body.style.backgroundImage = "url('./play.png')";
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    displayChoice('player-choice', playerChoice);
    displayChoice('computer-choice', computerChoice);

    const result = getResult(playerChoice, computerChoice);
    updateScore(result);
    displayResult(result);
}

function displayChoice(elementId, choice) {
    const element = document.getElementById(elementId);
    element.innerHTML = `<img src="./${choice}.png" alt="${choice}">`;
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if (result === 'lose') {
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (result === 'tie') {
        resultElement.textContent = "It's a tie!";
    } else if (result === 'win') {
        resultElement.textContent = "You win!";
    } else {
        resultElement.textContent = "Computer wins!";
    }
}