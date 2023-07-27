import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  
  
  it('should be able to add two numbers', () => {
  	const button2 = container.getByTestId('number2');
  	const button4 = container.getByTestId('number4');
  	const addButton = container.getByTestId('operator-add')
  	const equalsButton = container.getByTestId('operator-equals')
  	const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('6');
  })
  
  
  it('should be able to subtract two numbers', () => {
  	const button2 = container.getByTestId('number2');
  	const button4 = container.getByTestId('number4');
  	const subtractButton = container.getByTestId('operator-subtract')
  	const equalsButton = container.getByTestId('operator-equals')
  	const runningTotal = container.getByTestId('running-total');
  	fireEvent.click(button2);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('-2');  
  })
  
  
  it('should be able to multiply two numbers', () => {
    const button2 = container.getByTestId('number2');
  	const button4 = container.getByTestId('number4');
  	const multiplyButton = container.getByTestId('operator-multiply')
  	const equalsButton = container.getByTestId('operator-equals')
  	const runningTotal = container.getByTestId('running-total');
  	fireEvent.click(button2);
    fireEvent.click(multiplyButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('8'); 
  })
  

  it('should be able to divide and show fractional number', () => {
    const button9 = container.getByTestId('number9');
  	const button2 = container.getByTestId('number2');
  	const divideButton = container.getByTestId('operator-divide')
  	const equalsButton = container.getByTestId('operator-equals')
  	const runningTotal = container.getByTestId('running-total');
  	fireEvent.click(button9);
    fireEvent.click(divideButton);
    fireEvent.click(button2);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('4.5'); 
  }) 
  
  
  it('should be able to show multiple number presses', () => {
    const button1 = container.getByTestId('number1');
  	const button2 = container.getByTestId('number2');
  	const button3 = container.getByTestId('number3');
  	const decimalButton = container.getByTestId('decimal');
  	const runningTotal = container.getByTestId('running-total');
  	fireEvent.click(button3);
    fireEvent.click(button2);
	fireEvent.click(button1);
	fireEvent.click(decimalButton);
	fireEvent.click(button1);
	fireEvent.click(button2);
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('321.123'); 
  })
  
  
  it ('should be able to chain operations', () => {
  	const button9 = container.getByTestId('number9');
  	const button2 = container.getByTestId('number2');
  	const button3 = container.getByTestId('number3');
  	const button7 = container.getByTestId('number7');
  	const button5 = container.getByTestId('number5');
  	const addButton = container.getByTestId('operator-add')
  	const subtractButton = container.getByTestId('operator-subtract')
  	const multiplyButton = container.getByTestId('operator-multiply')
  	const divideButton = container.getByTestId('operator-divide')
  	const equalsButton = container.getByTestId('operator-equals')
  	const runningTotal = container.getByTestId('running-total');
  	fireEvent.click(button9);
    fireEvent.click(divideButton);
	fireEvent.click(button2);
	fireEvent.click(multiplyButton);
	fireEvent.click(button3);
	fireEvent.click(addButton);
	fireEvent.click(button5);
	fireEvent.click(subtractButton);
	fireEvent.click(button7);
	fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('11.5'); 
  })
  

  it ('should be able to clear the running total without affecting the calculation', () => {
  	const clearButton = container.getByTestId('clear');
  	const button9 = container.getByTestId('number9');
  	const button2 = container.getByTestId('number2');
  	const button3 = container.getByTestId('number3');
  	const addButton = container.getByTestId('operator-add')
  	const subtractButton = container.getByTestId('operator-subtract')
   	const divideButton = container.getByTestId('operator-divide')
  	const equalsButton = container.getByTestId('operator-equals')
  	const runningTotal = container.getByTestId('running-total');
  	fireEvent.click(button9);
  	fireEvent.click(subtractButton);
  	fireEvent.click(button3);
  	fireEvent.click(clearButton);
  	fireEvent.click(divideButton);
	fireEvent.click(button2);
	fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('4.5'); 
  })

  
  
})

