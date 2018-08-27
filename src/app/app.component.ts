import { Component } from '@angular/core';
import { CalculatorService } from './shared/calculatorService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Calculator app component
 */
export class AppComponent {
  title = 'Calculator';

  constructor(private service: CalculatorService) { }
}

