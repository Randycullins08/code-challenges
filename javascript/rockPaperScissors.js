// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// function rockPaperScissors(player1, player2) {
//   const rules = {
//     rock: "paper",
//     paper: "scissors",
//     scissors: "rock",
//   };

//   if (player1 === player2) {
//     return "Draw!";
//   }

//   if (player2 !== rules[player1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }

//   //   if (
//   //     (player1 === "scissors" && player2 === "paper") ||
//   //     (player1 === "rock" && player2 === "scissors") ||
//   //     (player1 === "paper" && player2 === "rock")
//   //   ) {
//   //     return "Player 1 won!";
//   //   } else {
//   //     return "Player 2 won!";
//   //   }
// }

// // Examples
// console.log(rockPaperScissors("scissors", "paper")); // "Player 1 won!"
// console.log(rockPaperScissors("scissors", "rock")); // "Player 2 won!"
// console.log(rockPaperScissors("paper", "paper")); // "Draw!"

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

// Track recent player moves and AI predictions
let playerHistory = [];
const historyLimit = 4; // Number of moves to track for pattern analysis

// Function to predict the player's next move
function predictPlayerMove() {
  if (playerHistory.length < 2) {
    // Not enough history to predict
    return "rock"; // Default to rock as a safe choice
  }

  // Check for repetition pattern
  const lastMove = playerHistory[playerHistory.length - 1];
  const secondLastMove = playerHistory[playerHistory.length - 2];

  if (lastMove === secondLastMove) {
    // If the player repeated a move twice, they might repeat again
    return lastMove;
  }

  // Check for a sequence pattern (e.g., rock -> paper -> scissors)
  if (playerHistory.length >= 3) {
    const thirdLastMove = playerHistory[playerHistory.length - 3];
    if (
      thirdLastMove === "rock" &&
      secondLastMove === "paper" &&
      lastMove === "scissors"
    ) {
      // If player follows rock -> paper -> scissors, predict they'll start over with rock
      return "rock";
    }
    if (
      thirdLastMove === "scissors" &&
      secondLastMove === "rock" &&
      lastMove === "paper"
    ) {
      // If player follows scissors -> rock -> paper, predict they'll start over with scissors
      return "scissors";
    }
  }

  // If no specific pattern found, predict based on last move
  return lastMove === "rock"
    ? "paper"
    : lastMove === "paper"
    ? "scissors"
    : "rock";
}

// Function to make the AI's move
function aiMove() {
  const predictedPlayerMove = predictPlayerMove();
  // Choose the move that beats the predicted player move
  return rules[predictedPlayerMove];
}

// Main game function
function play(player1Move) {
  // Update the player’s move history, ensuring we only keep the last few moves
  playerHistory.push(player1Move);
  if (playerHistory.length > historyLimit) {
    playerHistory.shift(); // Remove the oldest move to keep history size manageable
  }

  const aiChoice = aiMove();

  if (player1Move === aiChoice) {
    return "Draw!";
  } else if (rules[player1Move] === aiChoice) {
    return "Player 1 won!";
  } else {
    return "AI won!";
  }
}

// Example games
console.log(play("rock"));
console.log(play("paper"));
console.log(play("scissors"));
console.log(play("rock"));
