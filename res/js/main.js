const holes = document.getElementsByClassName("hole");
const start = document.getElementById("startGame");
const scoreBoard = document.getElementById("score");
const moles = document.getElementsByClassName("mole");

let lastHole;
let timeUp = false;
let score = 0;
let ended = false;

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

start.onclick = () => {
  if (ended === false) {
    ended = true;
    scoreBoard.innerText = 0;
    timeUp = false;
    score = 0;
    diglett();
  }
};

const randomHole = (holes) => {
  const i = randomNumber(0, 8);
  const hole = holes[i];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

const diglett = () => {
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (timeUp === false) {
      diglett()
    };
  }, 500);
}

function hit() {
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.innerText = score;
}

[...moles].forEach((mole) => (mole.onclick = hit));
