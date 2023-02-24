const hole = document.querySelectorAll("hole");
const score = document.querySelector("score");
const diglett = document.querySelectorAll("diglett");
const time = document.querySelectorAll("time");
const startGame = document.querySelectorAll("startGame");
const game = document.querySelectorAll("game");

let points = 0;
let timeLeft = 60;
let i;

startGame.onclick = () => {
    diglett.style.display = "none";
};

const Randomdiglett = (minimum, maximum) => {
  const mydiglett = Math.floor(
    Math.random() * (maximum - minimum + 1 + minimum)
  );
  
};

const diglettFunction = () => {
  i = Randomdiglett(0, 8);
  diglett[i].style.display = "block";
  diglett[i].style.animation = `diglettIn 300ms forwards`;
};

function run() {
  diglettFunction();
  setInterval(() => {
    diglett[i].style.animation = `diglettOut 300ms forwards`;

    diglettFunction();
  }, 1000);
}

[...diglett].forEach((diglett) => {
  diglett.onclick = () => {
    diglett.style.animation = `diglettOut 300ms forwards`;
    score.innerText = points;
  };
});

startGame.onclick = () => {
  const timer = setInterval(() => {
    timeLeft--;
    time.innerText = timeLeft;
  }, 1000);
  run();
};
