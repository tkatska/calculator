import { Component, Input } from '@angular/core';
import { CalculatorService } from '../shared/calculatorService';
import { isNumber } from 'util';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() value: string;

  constructor(private service: CalculatorService) { }

  calculate() {
    const valueAsInt = parseInt(this.value, 10);
    if (!isNaN(valueAsInt) && isNumber(valueAsInt) || this.value === '.') {
      this.service.addNumber(this.value);
    } else if (this.value === 'del') {
        this.service.clear();
    } else if (this.value === '=') {
      this.service.displayResult();
    } else {
      this.service.setOperator(this.value);
    }
  }
}
