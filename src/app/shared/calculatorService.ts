import { Injectable } from '@angular/core';
import { isNumber } from 'util';

@Injectable({
    providedIn: 'root',
})
export class CalculatorService {
    private operator = '';
    public result = 0;
    private currentNumber = '';
    public equation = '';
    private calculatorValues: Array<string> = new Array<string>('1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del');
    private calculatorOperators: Array<string> = new Array<string>('/', '*', '+', '-', '=');
    private history: Array<string> = new Array<string>();

    constructor() { }

    setOperator(operator: string): boolean {
        if (!this.validateOperator(operator)) {
            return false;
        }
        if (this.currentNumber === '' && this.operator !== '=') {
            this.operator = operator;
            this.equation = this.equation.substring(0, this.equation.length - 1) + operator;
            return true;
        }
        if (this.currentNumber !== '' && this.operator !== '') {
            const result = this.calculate();
            if (!result) { return false; }
        }
        if (this.currentNumber !== '') {
            this.setresult(this.currentNumber);
            this.currentNumber = '';
        }
        this.operator = operator;
        this.equation += operator;
        return true;
    }

    removeLastChar() {
        this.equation.substring(0, this.equation.length - 1);
    }

    /**
     * concatenate provided number to current number
     * it accepts as parameter any number or colon in a string format
     * @param number
     */
    addNumber(number: string): boolean {
        if (!this.validateNumber(number)) {
            return false;
        }
        if (number === '.' && this.currentNumber === '') {
            this.currentNumber = '0.';
            number = '0.';
        } else {
            this.currentNumber += number;
            if (this.operator === '') {
                this.setresult(this.currentNumber);
            }
        }
        this.equation += number;
        return true;
    }

    displayResult(): any {
        if (this.result !== 0 && this.currentNumber !== '' && this.operator !== '' && this.operator !== '=') {
            const result = this.calculate();
            if (!result) { return; }
            this.saveHistory();
            this.equation = '';
            this.operator = '';
        } else if (this.operator !== '=' && this.currentNumber !== '') {
            this.setresult(this.currentNumber);
            this.currentNumber = '';
            this.saveHistory();
            this.equation = '';
        }
    }

    clear() {
        this.operator = '';
        this.result = 0;
        this.currentNumber = '';
        this.equation = '';
    }

    private saveHistory(): any {
        this.equation += ' = ' + this.result;
        this.history.push(this.equation);
    }

    private calculate(): boolean {
        const currentNumber = parseFloat(this.currentNumber);
        if (isNaN(currentNumber)) {
            return false;
        }
        if (this.operator === '/') {
            if (currentNumber === 0) {
                this.divideByZero();
                return false;
            }
            this.setresult(this.result / currentNumber);
        }
        if (this.operator === '*') {
            this.setresult(this.result * currentNumber);
        }
        if (this.operator === '+') {
            this.setresult(this.result + currentNumber);
        }
        if (this.operator === '-') {
            this.setresult(this.result - currentNumber);
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

    private setresult(number) {
        this.result = parseFloat(number);
    }

    private validateNumber(number: string): any {
        if (number === '.') {
            if (this.getLastChar() === '.' || this.currentNumber.includes('.')) {
                return false;
            }
            return true;
        }
        const floatNum = parseFloat(number);
        if (isNaN(floatNum)) {
            return false;
        }
        return isNumber(floatNum);
    }

    private validateOperator(operator: string): any {
        return this.calculatorOperators.includes(operator);
    }
}
