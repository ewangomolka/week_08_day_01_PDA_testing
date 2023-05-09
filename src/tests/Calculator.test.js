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

  it ('should add 1 to 4', ()=>{
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const addNumber = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals');
    const runningTotal=container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addNumber);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5')

  })

  it ('should subtract 4 from 7', ()=>{
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const subNumber = container.getByTestId('operator-subtract');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7)
    fireEvent.click(subNumber)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })
  
  it ('should multiply 3 by 5', ()=>{
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyNumber = container.getByTestId('operator-multiply');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(multiplyNumber)
    fireEvent.click(button5)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')
    
  })
  
  it ('should divide 21 by 7', ()=>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divideNumber = container.getByTestId('operator-divide');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divideNumber)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3');
  })

  it ('should handle multiple number clicks', ()=>{
    const button3 = container.getByTestId('number3');
    const button6 = container.getByTestId('number6');
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(button6)
    fireEvent.click(button2)
    expect(runningTotal.textContent).toEqual('362');
  })

  it ('should chain multiple operations together', ()=>{
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const button7 = container.getByTestId('number7');
    const addNumber = container.getByTestId('operator-add')
    const multiplyNumber = container.getByTestId('operator-multiply');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(addNumber);
    fireEvent.click(button2)
    fireEvent.click(multiplyNumber);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('35')
  })
  
  it ('should clear the running total without affecting the calculation', ()=>{
    const button3 = container.getByTestId('number3');
    const addNumber = container.getByTestId('operator-add');
    const equals = container.getByTestId('operator-equals');
    const clear = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(addNumber)
    fireEvent.click(button3)
    fireEvent.click(equals)
    fireEvent.click(clear)
    fireEvent.click(addNumber)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('3')
  })
})

