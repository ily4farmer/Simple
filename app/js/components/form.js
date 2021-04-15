export default function form() {
    const reg = /.+@.+\..+/i;
    let email = document.querySelector('.form__email'),
        btn = document.querySelector('.form__btn'),
        error = document.querySelector('.form__error');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!reg.test(email.value)) {
            email.classList.add('red');
            email.value = "";
            error.textContent = "Enter email";
            return false;
        } else {
            error.textContent = "";
            email.value = "";
            email.classList.remove('red');
            return true;
        }
    });
}