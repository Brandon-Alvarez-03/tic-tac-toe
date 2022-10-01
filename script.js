//make queries for each important item

let p1Turn = document.querySelector(".player-one");
let p2Turn = document.querySelector(".player-one");
let boxes = document.querySelectorAll(".tile");
let resetBtn = document.querySelector("#reset");
console.log(boxes);
// create function for change red and one for change blue
function makeBlue(box) {
  box.target.style.backgroundColor = `lightBlue`;
}

function makeRed(box) {
  box.target.style.backgroundColor = `red`;
}
//create an event listener to toggle for red or blue on each grid
boxes.forEach((tile) => {
  tile.addEventListener("click", (e) => {
    //change color red change color blue
    if (e.target.style.backgroundColor != `blue`) {
      makeRed(e);
    }
    if (e.target.style.backgroundColor != `red`) {
      makeBlue(e);
    } else {
      e.target.style.backgroundColor = `lightGray`;
    }
  });
});

//when each of those switches toggle the color on player one or player two

//make reset button clear the board and clear colors from the players names
