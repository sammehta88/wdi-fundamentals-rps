////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        return 'tie';
    }

    switch(playerMove) {
        case 'paper':
            winner = computerMove === 'rock' ? 'player' : 'computer';
            break;
        case 'rock':
            winner = computerMove === 'scissors' ? 'player' : 'computer';
            break;
        case 'scissors':
            winner = computerMove === 'paper' ? 'player' : 'computer';
            break;
        default:
            winner = 'invalid move - play again';
    }

    return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors \n First to " + x  + " wins!");
    var playerWins = 0;
    var computerWins = 0;
    var lastWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < x && computerWins < x) {
        var winner = playARound();

        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        } else {
            console.log(winner);
        }

        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        lastWinner = winner;
    }

    console.log(winner + ' has won the game!');
    return [playerWins, computerWins];
}

function playARound() {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        return getWinner(playerMove,computerMove);
}

