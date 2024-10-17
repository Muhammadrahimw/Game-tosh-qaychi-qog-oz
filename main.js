let player = document.getElementById("player");
let computer = document.getElementById("computer");
let stone = document.getElementById("stone");
let clipper = document.getElementById("clipper");
let paper = document.getElementById("paper");
let restart = document.getElementById("restart");
let gameNum = document.getElementById("gameNum");
let gameNumber = 3;
let randomNum = null;
let comp = null;
let play = null;
let a = "tosh";
let b = "qaychi";
let c = "qog'oz";
let compCalc = 0;
let playCalc = 0;

stone.addEventListener("click", () => {
  play = a;
  func(randomNum);
  calcingGame(a);
});

clipper.addEventListener("click", () => {
  play = b;
  func(randomNum);
  calcingGame(b);
});

paper.addEventListener("click", () => {
  play = c;
  func(randomNum);
  calcingGame(c);
});

restart.addEventListener("click", () => {
  newGame();
});

gameNum.addEventListener("click", () => {
  gameNumber = Number(prompt("O'yin chegarasini tanlang:"));
});

function func(randomNum) {
  randomNum = Math.round(Math.random() * 10);
  if (randomNum >= 0 && randomNum <= 3) {
    comp = a;
  } else if (randomNum >= 4 && randomNum <= 7) {
    comp = b;
  } else if (randomNum >= 8 && randomNum <= 10) {
    comp = c;
  }
  return comp;
}

let calcingGame = (type) => {
  func(randomNum);
  if (type === c) {
    if (play !== comp) {
      if (comp === a) {
        playCalc += 1;
        alert(`Siz yutdingiz, compyuter tosh ni tanladi`);
        finalCalc();
        return;
      }
      compCalc += 1;
      alert(`Siz yutqazdingiz, compyuter qaychi ni tanladi`);
      finalCalc();
      return;
    }
  } else if (type === b) {
    if (play !== comp) {
      if (comp === c) {
        playCalc += 1;
        alert(`Siz yutdingiz, compyuter qog'oz ni tanladi`);
        finalCalc();
        return;
      }
      compCalc += 1;
      alert(`Siz yutqazdingiz, compyuter tosh ni tanladi`);
      finalCalc();
      return;
    }
  } else if (type === a) {
    if (play !== comp) {
      if (comp === b) {
        playCalc += 1;
        alert(`Siz yutdingiz, compyuter qaychi ni tanladi`);
        finalCalc();
        return;
      }
      compCalc += 1;
      alert(`Siz yutqazdingiz, compyuter qog'oz ni tanladi`);
      finalCalc();
      return;
    }
  }
  alert(`Durrang! compyuter ham ${type} ni tanladi`);
};

let finalCalc = () => {
  player.textContent = playCalc;
  computer.textContent = compCalc;
  if (compCalc === gameNumber) {
    newGame();
    alert("Siz bu o'yinda yutqazdingiz!");
  } else if (playCalc === gameNumber) {
    newGame();
    alert("Siz bu o'yinda yutdingiz!");
  }
};

let newGame = () => {
  compCalc = 0;
  playCalc = 0;
  player.textContent = playCalc;
  computer.textContent = compCalc;
};
