const num1El = document.getElementsByClassName("num1")[0];
const num2El = document.getElementsByClassName("num2")[0];
const signEl = document.getElementsByClassName("sign")[0];
const eqlEl = document.getElementsByClassName("eql")[0];
const ansEl = document.getElementsByClassName("quesMark")[0];
const op1El = document.getElementsByClassName("op1")[0];
const op2El = document.getElementsByClassName("op2")[0];
const op3El = document.getElementsByClassName("op3")[0];
const rightEl = document.getElementsByClassName("right")[0];
const wrongEl = document.getElementsByClassName("wrong")[0];

let answer = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function generate() {
  ansEl.textContent = "?";
  rightEl.style.display = "";
  wrongEl.style.display = "";
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);

  answer = num1 / num2;

  console.log(answer);

  num1El.textContent = `${num1}`;
  num2El.textContent = `${num2}`;

  let dummyAns1 = Math.floor(Math.random() * 10);
  let dummyAns2 = Math.floor(Math.random() * 10);

  let ansArr = [answer, dummyAns1, dummyAns2];

  let switchArr = shuffleArray(ansArr);

  op1El.textContent = switchArr[0];
  op2El.textContent = switchArr[1];
  op3El.textContent = switchArr[2];
}

generate();

op1El.addEventListener("click", function () {
  ansEl.textContent = `${op1El.textContent}`;
  if (op1El.textContent === String(answer)) {
    rightEl.style.display = "block";
    wrongEl.style.display = "none";
    setTimeout(function () {
      generate();
    }, 1000);
  } else {
    rightEl.style.display = "none";
    wrongEl.style.display = "block";
  }
});

op2El.addEventListener("click", function () {
  ansEl.textContent = `${op2El.textContent}`;
  if (op2El.textContent === String(answer)) {
    rightEl.style.display = "block";
    wrongEl.style.display = "none";
    setTimeout(function () {
      generate();
    }, 1000);
  } else {
    rightEl.style.display = "none";
    wrongEl.style.display = "block";
  }
});

op3El.addEventListener("click", function () {
  ansEl.textContent = `${op3El.textContent}`;
  if (op3El.textContent === String(answer)) {
    rightEl.style.display = "block";
    wrongEl.style.display = "none";
    setTimeout(function () {
      generate();
    }, 1000);
  } else {
    rightEl.style.display = "none";
    wrongEl.style.display = "block";
  }
});
