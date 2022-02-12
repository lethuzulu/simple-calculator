class Calculator {
    constructor(previousOperandTextElement, currentOperand) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperand;
        this.clear();
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return; //Guard Clause
        this.currentOperand =
            this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand == "") return; //Guard Clause
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;

        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) {
            return;
        }
        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;

            case "-":
                computation = prev - current;
                break;

            case "*":
                computation = prev * current;
                break;

            case "/":
                computation = prev / current;
                break;

            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = "";
        this.previousOperand = "";
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;

        if(this.operation !== undefined){
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;

        }
    }
}

let previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
);
let currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
);

let numberButtons = document.querySelectorAll("[data-number]");

let operationButtons = document.querySelectorAll("[data-operation]");

let equalsButton = document.querySelector("[data-equals]");

let clearButton = document.querySelector("[data-clear-all]");

let deleteButton = document.querySelector("[data-delete]");

let calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});
