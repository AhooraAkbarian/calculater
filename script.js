const display = document.querySelector('span');
const numberButtons = document.querySelectorAll('.num-btn');
const clear =document.getElementById('num-3');

numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        const number = this.getAttribute('data-number');
        display.textContent += number;
        display.textContent = Number(display.textContent);
    });
});

clear.addEventListener('click' , ()=>{
    display.textContent=0;
})