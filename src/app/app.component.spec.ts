import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorService } from './shared/calculatorService';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HistoryComponent,
        DisplayComponent,
        ButtonComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
