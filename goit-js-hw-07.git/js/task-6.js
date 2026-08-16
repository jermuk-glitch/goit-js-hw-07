function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
    size += 10;
  }

  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

createBtnEl.addEventListener('click', () => {
  const amount = Number(inputEl.value);

  if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  inputEl.value = '';
});

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
  inputEl.value = '';
});
