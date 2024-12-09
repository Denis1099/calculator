
let numA = '';
let numB = '';
let operator = '';

const input = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        
        let targetBtn = e.target.innerText;

        
        if (!isNaN(targetBtn)) {
            updateDisplay(targetBtn);
            if(operator == ''){
                numA += targetBtn;
                console.log(numA);
            } else {
                numB += targetBtn;
                console.log(numB);
            }
        } 
        if((targetBtn == '.') && (input.value.indexOf('.') == -1)){
            updateDisplay(targetBtn);
            if(operator == ''){
                numA += targetBtn;
            } else numB += targetBtn;
        }
        if (targetBtn == '+' || targetBtn == '-' || targetBtn == 'x' || targetBtn == '/'){
            if(numB == ''){
                input.value = targetBtn;
                operator = targetBtn;
            } else {
                result = operate(parseFloat(numA), operator, parseFloat(numB));
                input.value = result + targetBtn;
                operator = targetBtn;
                numA = result;
                numB = 0;
            } 
        }
        if (targetBtn == '='){
            if (numA == '' || numB == '') {
                // If no operator or incomplete calculation, do nothing
                if (operator === '') return;
                
                // If only first number exists, repeat last operation
                if (numB === '') {
                    numB = input.value; // Use current display value as second number
                }
            }
        
            // Prevent division by zero
            if (operator === '/' && (numB === '0' || parseFloat(numB) === 0)) {
                input.value = 'Error';
                // Reset calculator state
                numA = '';
                numB = '';
                operator = '';
                return;
            }
            const result = operate(parseFloat(numA), operator, parseFloat(numB));
            
           

            input.value = result;

            numA = result.toString();;
            numB = '';
            operator = '';

        }
        if( targetBtn == 'AC'){
            input.value = 0;
            numA = 0;
            numB = 0;
            operator = '';

        }
    })
})


function updateDisplay(num) {
    // If current value is '0', replace it completely
    if (input.value === '0') {
        input.value = num;
    } else {
        
        input.value += num;
    }
}

function operate(numA, operator, numB){
    if(operator == '+'){
        return add(numA, numB);

    } else if(operator == '-'){
        return subtract(numA, numB);

    } else if(operator == 'x'){
        return multiply(numA, numB);

    } else if(operator == '/'){
        return divide(numA, numB);
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