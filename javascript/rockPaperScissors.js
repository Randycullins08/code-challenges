// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  }

  if (
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}

// Examples
console.log(rockPaperScissors("scissors", "paper")); // "Player 1 won!"
console.log(rockPaperScissors("scissors", "rock")); // "Player 2 won!"
console.log(rockPaperScissors("paper", "paper")); // "Draw!"
