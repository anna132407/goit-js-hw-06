const userFormEl = document.querySelector('.login-form');

const onBtnSubmitForm = event => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('All fields must be field!');
    }
    const userForm = {
        email: email.value,
        password: password.value,
    }
    console.log(userForm);
    event.currentTarget.reset();
}

userFormEl.addEventListener('submit', onBtnSubmitForm);
