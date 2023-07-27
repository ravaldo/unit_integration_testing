import Counter from '../components/Counter';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

// HERE WE ARE TESTING THE JPX

describe("Counter", () => {

  let container;

  beforeEach(() => {
  	container = render(<Counter/>);
  	
  });

  it('should start the counter at zero', () => {
    const counter = container.getByTestId("counter");
    expect(counter.textContent).toEqual('0');
  });

  it("should increment counter on click", () => {
    const upButton = container.getByTestId("button-up");
    const counter = container.getByTestId("counter");
	fireEvent.click(upButton);
	expect(counter.textContent).toEqual('1');
    
  });

  it("should decrement counter on click", () => {
    const downButton = container.getByTestId("button-down");
    const counter = container.getByTestId("counter");
	fireEvent.click(downButton);
	expect(counter.textContent).toEqual('-1');
  });

})