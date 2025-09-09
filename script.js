const display = document.querySelector('span');
const numberButtons = document.querySelectorAll('.num-btn');
const clear =document.getElementById('num-3');
const plus = document.getElementById('plus');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const devied = document.getElementById('devied');
const equal = document.getElementById('equal');

let lastOperition = '';
let memory = 0;

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

plus.addEventListener('click' , ()=>{
    lastOperition = 'plus';
    memory = display.textContent;
    display.textContent = Number(display.textContent);
    display.textContent = 0;
});

equal.addEventListener('click' , ()=>{
    lastOperition = 'equal';
    memory = display.textContent;
    display.textContent = Number(display.textContent);
    display.textContent = 0;
});
multiply.addEventListener('click' , ()=>{
    lastOperition = 'multiply';
    memory = display.textContent;
    display.textContent = Number(display.textContent);
    display.textContent = 0;
});
minus.addEventListener('click' , ()=>{
    lastOperition = 'minus';
    memory = display.textContent;
    display.textContent = Number(display.textContent);
    display.textContent = 0;
});
devied.addEventListener('click' , ()=>{
    lastOperition = 'devied';
    memory = display.textContent;
    display.textContent = Number(display.textContent);
    display.textContent = 0;
});