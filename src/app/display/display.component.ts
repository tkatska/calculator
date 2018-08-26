import { Component } from '@angular/core';
import { CalculatorService } from '../shared/calculatorService';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(private service: CalculatorService) { }
}
