import { Component } from '@angular/core';
import { CalculatorService } from '../shared/calculatorService';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
/**
 * Component for the calculator history
 */
export class HistoryComponent  {

  constructor(private service: CalculatorService) { }

}
