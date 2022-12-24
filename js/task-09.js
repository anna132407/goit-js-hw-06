function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const userBtnEl = document.querySelector('.change-color');
const userSpanEl = document.querySelector('.color');

const onBtnClick = event => {
  document.body.style.backgroundColor = getRandomHexColor();
  userSpanEl.textContent = getRandomHexColor();
}

userBtnEl.addEventListener('click', onBtnClick);
