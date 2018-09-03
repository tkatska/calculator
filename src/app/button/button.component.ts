import { Component, Input, HostListener } from '@angular/core';
import { CalculatorService } from '../shared/calculatorService';
import { isNumber } from 'util';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
/**
 * Component to create calculator buttons
 * Supports backspace and enter.
 */
export class ButtonComponent {
  @Input() value: string;
  ENTER_KEYCODE = 13;
  DEL_KEYCODE = 46;

  constructor(private service: CalculatorService) { }

  // will call appropriate calculate function from the calculator service
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

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.keyCode === this.ENTER_KEYCODE) {
      this.service.displayResult();
    }

    if (event.keyCode === this.DEL_KEYCODE) {
      this.service.clear();
    }
  }
}
