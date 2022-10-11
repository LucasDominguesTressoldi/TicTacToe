function button() {
  squares.forEach((element) => {
    element.innerText = "";
    element.classList.remove("painted");
    element.addEventListener("click", function clickFunction() {
      if (player === 0) {
        element.innerText = "X";
        resultX += addMovement(element);
        plays++;
        if (plays > 4) {
          whoWon(resultX, player);
        }
        player++;
      } else {
        element.innerText = "O";
        resultO += addMovement(element);
        plays++;
        if (plays > 4) {
          whoWon(resultO, player);
        }
        player--;
      }
      playerX.classList.toggle("enabled");
      playerO.classList.toggle("enabled");
      element.removeEventListener("click", clickFunction);
    });
  });
}

function addMovement(element) {
  let result = "";
  switch (element.id) {
    case "top-left":
      result = "topLeft-";
      break;
    case "top-mid":
      result = "topMid-";
      break;
    case "top-right":
      result = "topRight-";
      break;
    case "mid-left":
      result = "midLeft-";
      break;
    case "mid-middle":
      result = "midMiddle-";
      break;
    case "mid-right":
      result = "midRight-";
      break;
    case "bottom-left":
      result = "bottomLeft-";
      break;
    case "bottom-mid":
      result = "bottomMid-";
      break;
    case "bottom-right":
      result = "bottomRight-";
      break;
  }

  return result;
}

function whoWon(result, player) {
  if (
    result.includes("topLeft-") &&
    result.includes("topMid-") &&
    result.includes("topRight-")
  ) {
    paintRes("top-left", "top-mid", "top-right", player);
  }
  if (
    result.includes("topLeft-") &&
    result.includes("midLeft-") &&
    result.includes("bottomLeft-")
  ) {
    paintRes("top-left", "mid-left", "bottom-left", player);
  }
  if (
    result.includes("topMid-") &&
    result.includes("midMiddle-") &&
    result.includes("bottomMid-")
  ) {
    paintRes("top-mid", "mid-middle", "bottom-mid", player);
  }
  if (
    result.includes("topRight-") &&
    result.includes("midRight-") &&
    result.includes("bottomRight-")
  ) {
    paintRes("top-right", "mid-right", "bottom-right", player);
  }
  if (
    result.includes("midLeft-") &&
    result.includes("midMiddle-") &&
    result.includes("midRight-")
  ) {
    paintRes("mid-left", "mid-middle", "mid-right", player);
  }
  if (
    result.includes("bottomLeft-") &&
    result.includes("bottomMid-") &&
    result.includes("bottomRight-")
  ) {
    paintRes("bottom-left", "bottom-mid", "bottom-right", player);
  }
  if (
    result.includes("topRight-") &&
    result.includes("midMiddle-") &&
    result.includes("bottomLeft-")
  ) {
    paintRes("top-right", "mid-middle", "bottom-left", player);
  }
  if (
    result.includes("topLeft-") &&
    result.includes("midMiddle-") &&
    result.includes("bottomRight-")
  ) {
    paintRes("top-left", "mid-middle", "bottom-right", player);
  }

  if (plays === 9) {
    winner.innerText = "Empate!";
  }
}

function paintRes(square1, square2, square3, player) {
  squares.forEach((element) => {
    if (element.id === square1) {
      element.classList.add("painted");
    }
    if (element.id === square2) {
      element.classList.add("painted");
    }
    if (element.id === square3) {
      element.classList.add("painted");
    }
  });

  if (player === 0) {
    winner.innerText = "Player X won!";
  } else {
    winner.innerText = "Player O won!";
  }
}

function playAgain() {
  resultX = "";
  resultO = "";
  plays = 0;
  player = 0;
  button();
}

const winner = document.getElementById("who-win");
const squares = document.querySelectorAll(".squares");
const scoreboardX = document.getElementById("scoreboard-X");
const scoreboardO = document.getElementById("scoreboard-O");

const playerX = document.getElementById("player-x");
const playerO = document.getElementById("player-o");
playerX.innerText = "Player X: " + prompt("Player X name?");
playerO.innerText = "Player O: " + prompt("Player O name?");

let plays = 0;
let player = 0;
let resultX = "";
let resultO = "";

button();
