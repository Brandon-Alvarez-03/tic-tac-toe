//make queries for each important item

let player1Set = new Set();
let player2Set = new Set();
console.log(player1Set, player2Set);

let p1Turn = document.querySelector(".player-one");
let p2Turn = document.querySelector(".player-two");

let boxes = document.querySelectorAll(".tile");
let resetBtn = document.querySelector("#reset");
createCheck();
let playerOptions = ["playerOne", "playerTwo"];
let currentPlayer =
  playerOptions[Math.floor(Math.random() * playerOptions.length)];
console.log(currentPlayer);
changeVisibility();

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
      e.target.style.backgroundColor != "red" &&
      currentPlayer == "playerTwo" &&
      e.target.style.backgroundColor != "lightblue"
    ) {
      makeRed(e);
      player2Set.add(e.target.dataset.number);
      console.log(`Player 2: `, player2Set);
      currentPlayer = "playerOne";
      if (
        e.target.backgroundColor != "red" &&
        e.target.backgroundColor != "lightblue"
      ) {
        changeVisibility();
      }
    } else if (
      e.target.style.backgroundColor != "red" &&
      currentPlayer == "playerOne" &&
      e.target.style.backgroundColor != "red"
    ) {
      makeBlue(e);
      player1Set.add(e.target.dataset.number);
      console.log(`Player 1: `, player1Set);
      currentPlayer = "playerTwo";
      if (
        e.target.backgroundColor != "red" &&
        e.target.backgroundColor != "lightblue"
      ) {
        changeVisibility();
      }
    }
  });
});

// make player in control visible when it's their turn
function changeVisibility() {
  if (currentPlayer == "playerOne") {
    p2Turn.style.visibility = `hidden`;
    p1Turn.style.visibility = `visible`;
  }
  if (currentPlayer == "playerTwo") {
    p1Turn.style.visibility = `hidden`;
    p2Turn.style.visibility = `visible`;
  }
}
// Establish win conditions and display win alert

//create set of winning combos to compare win conditions against
function createCheck() {
  let set1 = new Set(["1", "2", "3"]);
  let set2 = new Set(["4", "5", "6"]);
  let set3 = new Set(["7", "8", "9"]);
  let set4 = new Set(["1", "4", "7"]);
  let set5 = new Set(["2", "5", "8"]);
  let set6 = new Set(["3", "6", "9"]);
  let set7 = new Set(["1", "5", "9"]);
  let set8 = new Set(["3", "5", "7"]);
  let compareSet = new Set();
  function addToSet(set) {
    compareSet.add(set);
  }
  addToSet(set1);
  addToSet(set2);
  addToSet(set3);
  addToSet(set4);
  addToSet(set5);
  addToSet(set6);
  addToSet(set7);
  addToSet(set8);
  console.log(compareSet);
}

// function to populate player combo
function AddPlayerChoice() {}

//function to compare player combos with winning combos and display winner with an alert

//if you click a color that has already been filled do not swap player turn`

//make reset button clear the board and clear colors from the players names
resetBtn.addEventListener("click", () => {
  boxes.forEach((tile) => {
    tile.style.backgroundColor = `lightgray`;
  });
  currentPlayer =
    playerOptions[Math.floor(Math.random() * playerOptions.length)];
  changeVisibility();
  console.log(currentPlayer);
  for (const item of player1Set) {
    player1Set.delete(item);
  }
  for (const item of player2Set) {
    player2Set.delete(item);
  }
  console.log(player1Set, player2Set);
});
