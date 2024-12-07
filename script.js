
let numA = 0;
let numB = 0;
let operator = ''

const input = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        numA = e.target.innerText;
        if (!isNaN(numA)) {
            input.value += numA;
        } //else {
            // Handle operators and other special buttons
            // ... (your logic for handling operators)
    })
})


function operate(numA, operator, numB){
    if(operator == '+'){
        add(numA, numB);

    } else if(operator == '-'){
        subtract(numA, numB);

    } else if(operator == '*'){
        multiply(numA, numB);

    } else if(operator == '/'){
        divide(numA, numB);
    } 
    
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}