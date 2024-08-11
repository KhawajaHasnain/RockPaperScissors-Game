let turn = 1;
let player_one_choice;
let player_two_choice;
let turns_done = 0;

const turn_change = (turn) => {
    if (turn === 1) {
        document.querySelector(".turn-text").innerHTML = "<p>Player two's turn</p>"
        return turn + 1;
    }
    else {
        document.querySelector(".turn-text").innerHTML = "<p>Game Over</p>"
        document.querySelector(".play-again").style.visibility = "visible";
        return turn - 1;
    }
}
const check_win = (p1, p2) => {
    if (p1 === p2) {
        return "draw"
    }
    else if (p1 === "rock" && p2 === "paper") {
        return "player 2"
    }
    else if (p1 === "rock" && p2 === "scissor") {
        return "player 1"
    }
    else if (p1 === "paper" && p2 === "rock") {
        return "player 1"
    }
    else {
        return "player 2"
    }
}

document.querySelectorAll(".choice-button").forEach((element, idx) => {
    let choice;
    
    if (idx === 0) {
        choice = "rock";
    }
    else if (idx === 1) {
        choice = "paper";
    }
    else {
        choice = "scissor"
    }

    element.addEventListener("click", () => {
        if (turns_done <= 1) {
            if (turn === 1) {
                player_one_choice = choice;
            }
            else {
                player_two_choice = choice;
            }
            turns_done++;
            turn = turn_change(turn);

            if (turns_done === 2) {
                let win = check_win(player_one_choice, player_two_choice);

                document.querySelector(".winning-text").style.visibility = "visible"

                if (win === "draw") {
                    document.querySelector(".winning-text").innerHTML = "<p>It's a draw</p>"
                }
                else if (win === "player 1") {
                    document.querySelector(".winning-text").innerHTML = "<p>Player 1 wins!</p>"
                }
                else {
                    document.querySelector(".winning-text").innerHTML = "<p>Player 2 wins!</p>"
                }
            }
        }
    })
})
document.querySelector(".play-again").addEventListener("click", () => {
    location.reload();
})