let inputText = document.getElementById('getText');
let getInput = document.getElementById('result');
let btnReset = document.getElementById('button__reset');
let btnEnter = document.getElementById('button__enter');
let showText = document.querySelector('.entry');

btnReset.addEventListener('click', () => {
    getInput.innerHTML = inputText.value = '';
})
btnEnter.addEventListener('click', () => {
    getInput.innerHTML = inputText.value;

    if (!inputText.value.length) {
        showText.classList.add('is-visible');
    }
    else {
        showText.classList.remove('is-visible');
    }
})