let newGame = () => {
  start.classList.add("hidden");
  let ar1 = function makeArray1() {
    let arrRand = [1];
    while (arrRand.length < 18) {
      let rand = Math.floor(Math.random() * (19 - 1) + 1);
      for (let y = 0; y < arrRand.length; y++) {
        if (!arrRand.includes(rand)) {
          arrRand.push(rand);
        }
      }
    }
    return arrRand;
  };
  let t1 = ar1();

  let ar2 = function makeArray2() {
    let arrRand2 = [1];
    while (arrRand2.length < 18) {
      let rand = Math.floor(Math.random() * (19 - 1) + 1);
      for (let y = 0; y < arrRand2.length; y++) {
        if (!arrRand2.includes(rand)) {
          arrRand2.push(rand);
        }
      }
    }
    return arrRand2;
  };

  let t2 = ar2();

  let array3 = t1.concat(t2);
  let key = 0;
  const fillNew2 = array3.map((item) => {
    key++;
    document.querySelector(".container__cards").innerHTML += `
      <div class="cards" id="${key}">
      <span>
      ${item}
      </span>
      </div>
  `;
  });

  let arrTemp = [];
  let arrId = [];
  let current = 0;
  function change() {
    this.classList.toggle("single_card");
    this.classList.add("two_cards");
    let keyCheck = this.id;
    current = this.innerHTML;
    if (arrTemp.length == 0) {
      arrTemp.push(current);
      arrId.push(keyCheck);
    } else if (arrTemp[0] == current && arrId[0] != keyCheck) {
      let allTwo2 = document.querySelectorAll(".two_cards");
      allTwo2.forEach((item) => {
        setTimeout(() => {
          item.classList.add("hide_cards");
        }, 200);
        item.classList.remove("two_cards");
      });
      arrTemp = [];
      arrId = [];
      let quantityHideCards = document.querySelectorAll(".hide_cards");
      if (quantityHideCards.length > 32) {
        finishGame();
      }
    } else {
      setTimeout(() => {
        this.classList.remove("single_card");
        let allTwo = document.querySelectorAll(".two_cards");
        this.classList.remove("two_cards");
        let allTwo3 = document.querySelectorAll(".two_cards");
        allTwo3.forEach((item) => {
          item.classList.remove("two_cards");
        });
        allTwo.forEach((item) => {
          item.classList.remove("single_card");
        });
      }, 200);
      arrTemp = [];
      arrId = [];
    }
  }

  const cards = document.querySelectorAll(".cards");

  cards.forEach((buttonItem) => {
    buttonItem.addEventListener("click", change);
  });
};

let startG = true;

let sec = 0;
function startGame() {
  newGame();
  setInterval(tick, 1000);
}

function tick() {
  if (!startG) return false;
  sec++;
  document.getElementById("timer").innerHTML = "Your game time: " + sec;
}

function finishGame() {
  startG = false;
  let name = window.prompt("Please type your name for this record:");
  localStorage.setItem(name, sec);
}

let start = document.querySelector(".start");
let finish = document.querySelector(".finish");

start.addEventListener("click", startGame);
start.classList.remove("hidden");
