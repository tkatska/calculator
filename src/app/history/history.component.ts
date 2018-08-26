import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../shared/calculatorService';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service: CalculatorService) { }

  ngOnInit() {
  }

}
