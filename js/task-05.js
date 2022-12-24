const userNameInputEl = document.querySelector('#name-input');
const userNameOutputEl = document.querySelector('#name-output');

const onInputElWrite = event => {
    if (userNameInputEl.value === '') {
        userNameOutputEl.textContent = 'Anonymous';
        return;
    }
    userNameOutputEl.textContent = userNameInputEl.value;
}

userNameInputEl.addEventListener('input', onInputElWrite);