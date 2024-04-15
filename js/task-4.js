const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else {
        const elementsObj = {
            email: form.elements.email.value.trim(),
            password: form.elements.password.value.trim()
        }
        console.log(elementsObj);
        form.reset();
    }
}

document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');