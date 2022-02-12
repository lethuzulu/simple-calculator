class Calculator{

    constructor(previousOperandTextElement, currentOperand){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperand;
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.'))return; //Guard Clause
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){

        if(this.currentOperand == '') return //Guard Clause
        if(this.previousOperand !== ''){
            //this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''; 
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

let previousOperandTextElement = document.querySelector('[data-previous-operand]');
let currentOperandTextElement = document.querySelector('[data-current-operand]');


let numberButtons = document.querySelectorAll('[data-number]');

let operationButtons = document.querySelectorAll('[data-operation]');

let equalsButton = document.querySelectorAll('[data-equals]');

let clearButton = document.querySelectorAll('[data-equals]');


let calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);


numberButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();        
    })
})

operationButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', ()=>{
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', ()=>{
    calculator.clear();
    calculator.updateDisplay();
})











