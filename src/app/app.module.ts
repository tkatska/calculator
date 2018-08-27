import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorService } from './shared/calculatorService';
import { OnEnterKeyDirective } from './on-enter-key.directive';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DisplayComponent,
    ButtonComponent,
    OnEnterKeyDirective
  ],
  exports: [AppComponent],
  imports: [
    BrowserModule],
  providers: [
    { provide: CalculatorService },
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
/**
 * Calulator module
 * Has a textarea display, and use buttons for the numbers and modifiers.
 * Supports decimal places.
 * Supports multiplication, division, addition, subtraction, backspace and enter.
 * A can view a history log of all previous calculations.
 */
export class AppModule { }
