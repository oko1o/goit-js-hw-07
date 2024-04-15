const input = document.querySelector("input");
const div = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  div.innerHTML = "";
});

let totalDimensions = 0;

function createBoxes(inputValue) {
  div.innerHTML = "";
  const boxesArr = [];
  let boxDimensions = 30;
  for (let i = 1; i <= inputValue; i++) {
    const box = `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${boxDimensions}px; height: ${boxDimensions}px;"></div>`;
    totalDimensions += boxDimensions;
    boxDimensions += 10;
    boxesArr.push(box);

  }
  const markUpBoxes = boxesArr.join("");
  div.insertAdjacentHTML("beforeend", markUpBoxes);
  div.style.width = `${totalDimensions + 64 + ((inputValue - 1) * 16)}px`;
}

createBtn.classList.add('create-btn');
destroyBtn.classList.add('destroy-btn');
document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');