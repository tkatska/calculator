import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
    private operator = '';
    public result = 0;
    private currentNumber = '';
    public equation = '';
    private calculatorValues: Array<string> = new Array<string>('1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del');
    private calculatorOperators: Array<string> = new Array<string>('/', '*', '+', '-', '=');

    constructor() { }

    setOperator(operator: string) {
        if (this.currentNumber === '' && this.operator !== '=') {
            this.operator = operator;
            this.equation = this.equation.substring(0, this.equation.length - 1) + operator;
            return;
        }
        if (this.currentNumber !== '' && this.operator !== '') {
            const result = this.calculate();
            if (!result) { return; }
        }
        if (this.currentNumber !== '') {
            this.result = parseFloat(this.currentNumber);
            this.currentNumber = '';
        }
        this.operator = operator;
        this.equation += operator;
    }

    removeLastChar() {
        this.equation.substring(0, this.equation.length - 1);
    }

    addNumber(number: string) {
        if (number === '.' && this.getLastChar() === '.' || number === '.' && this.currentNumber.includes('.')) { return; }
        if (number === '.' && this.currentNumber === '') {
            this.currentNumber = '0';
        } else {
            this.currentNumber += number;
        }
        this.equation += number;
    }

    displayResult(): any {
        if (this.result !== 0 && this.operator !== '' && this.operator !== '=') {
            const result = this.calculate();
            if (!result) { return; }
            this.equation = '';
            this.operator = '=';
        } else if (this.operator !== '=') {
            this.result = parseFloat(this.currentNumber);
            this.currentNumber = '';
            this.equation = '';
        }
    }

    clear() {
        this.operator = '';
        this.result = 0;
        this.currentNumber = '';
        this.equation = '';
    }

    private calculate(): boolean {
        if (this.operator === '/') {
            if (this.currentNumber === '0') {
                this.divideByZero();
                return false;
            }
            this.result = this.result / parseFloat(this.currentNumber);
        }
        if (this.operator === '*') {
            this.result = this.result * parseFloat(this.currentNumber);
        }
        if (this.operator === '+') {
            this.result = this.result + parseFloat(this.currentNumber);
        }
        if (this.operator === '-') {
            this.result = this.result - parseFloat(this.currentNumber);
        }
        this.currentNumber = '';
        return true;
    }

    private divideByZero(): any {
        this.clear();
        alert('Cannot divide by zero');
    }

    private getLastChar() {
        return this.currentNumber.substr(this.currentNumber.length - 1);
    }
}
