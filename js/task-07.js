const userInputEl = document.querySelector('#font-size-control');
const userSpanEl = document.querySelector('#text');

const onBtnChange = event => {
    userSpanEl.style.fontSize = userInputEl.value + 'px';
}

userInputEl.addEventListener('input', onBtnChange);
