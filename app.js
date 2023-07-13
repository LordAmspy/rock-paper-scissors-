function showWelcomeMessage() {
    var playerName = document.getElementById("playerName").value;
    var welcomeMessage = "Welcome, " + playerName + "!";
    document.getElementById("welcomeMessage").innerHTML = welcomeMessage;
    document.getElementById("nameForm").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
    document.body.style.backgroundImage = "url('./images.jpeg')"; // Change the background image URL
  }

  function playGame() {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice =
      choices[Math.floor(Math.random() * choices.length)];

    var playerChoice = document.querySelector(
      "input[name='radio']:checked"
    ).value;

    var resultMessage =
      "Player chose: " +
      playerChoice +
      "<br>Computer chose: " +
      computerChoice +
      "<br><br>";

    var result;

    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "Congratulations, you win!";
    } else {
      result = "Sorry, you lose!";
    }

    resultMessage += result;

    document.getElementById("gameResult").innerHTML = resultMessage;
  }