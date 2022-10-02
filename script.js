//make queries for each important item

let p1Turn = document.querySelector(".player-one");
let p2Turn = document.querySelector(".player-one");

let boxes = document.querySelectorAll(".tile");
let resetBtn = document.querySelector("#reset");
let playerOptions = ["playerOne", "playerTwo"];
let currentPlayer =
  playerOptions[Math.floor(Math.random() * playerOptions.length)];
console.log(currentPlayer);

console.log(boxes);
// create functions for change red and one for change blue
function makeBlue(box) {
  box.target.style.backgroundColor = `lightBlue`;
}

function makeRed(box) {
  box.target.style.backgroundColor = `red`;
}

//create an event listener to toggle for red or blue on each grid
// create tracker for each player and when clicked switch player
boxes.forEach((tile) => {
  tile.addEventListener("click", (e) => {
    //change color red change color blue
    if (
      // e.target.style.backgroundColor == `lightgray` &&
      currentPlayer == "playerTwo"
    ) {
      makeRed(e);
      currentPlayer = "playerOne";
    } else if (
      // e.target.style.backgroundColor == `lightgray` &&
      currentPlayer == "playerOne"
    ) {
      makeBlue(e);
      currentPlayer = "playerTwo";
    }
  });
});

// make player in control visible when it's their turn

// Establish win conditions and display win alert

//make reset button clear the board and clear colors from the players names
resetBtn.addEventListener("click", () => {
  boxes.forEach((tile) => {
    tile.style.backgroundColor = `lightgray`;
  });
});
