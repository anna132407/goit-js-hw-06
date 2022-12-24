const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
}

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

const onDecrBtnClick = function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
}

const onIncrBtnClick = function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;
}

decrementBtn.addEventListener('click', onDecrBtnClick);
incrementBtn.addEventListener('click', onIncrBtnClick);