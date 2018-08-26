import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorService } from './shared/calculatorService';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DisplayComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
