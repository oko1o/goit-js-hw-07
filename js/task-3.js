const textInput = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

const typingText = (event) => {
    textOutput.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
        textOutput.textContent = "Anonymous";
    }
};

textInput.addEventListener("input", typingText);

const textHeader = document.querySelector("h1");
console.log(textHeader);

const formWrapper = document.createElement('div');
formWrapper.classList.add('form-wrapper');
textInput.parentNode.insertBefore(formWrapper, textInput);
formWrapper.appendChild(textInput);
formWrapper.appendChild(textHeader);

document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');