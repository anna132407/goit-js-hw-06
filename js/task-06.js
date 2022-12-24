const userNameInputEl = document.querySelector('#validation-input');

const onInputBlur = event => {
    if (userNameInputEl.value.length === Number(userNameInputEl.dataset.length)) {
        userNameInputEl.classList.add('valid');
        userNameInputEl.classList.remove('invalid');
    }
    else {
        userNameInputEl.classList.add('invalid');
        userNameInputEl.classList.remove('valid');
    }
    return;
}

userNameInputEl.addEventListener('blur', onInputBlur);