import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from '../shared/calculatorService';

describe('CalculatorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CalculatorService]
        });
    });

    it('should be created', inject([CalculatorService], (service: CalculatorService) => {
        expect(service).toBeTruthy();
    }));
    it('should have add function', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.addNumber).toBeTruthy();
    }));
    it('should add', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.addNumber('5')).toEqual(true);
    }));
    it('should not add', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.addNumber('f')).toEqual(false);
    }));
    it('should add', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.addNumber('.')).toEqual(true);
    }));
    it('should not add', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.addNumber('***%###')).toEqual(false);
    }));
    it('should have setOperator function', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.setOperator).toBeTruthy();
    }));
    it('valid operator should set', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.setOperator('/')).toEqual(true);
    }));
    it('invalid operator should not set', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.setOperator('$')).toEqual(false);
    }));
    it('valid operator should not set', inject([CalculatorService], (service: CalculatorService) => {
        expect(service.setOperator('=')).toEqual(true);
    }));
});
