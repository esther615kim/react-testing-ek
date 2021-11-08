// import { render, screen, fireEvent } from '@testing-library/react';
// // import App from './App';

// test('the counter starts from 0', () => {
//     render(<App />);
//     //use Screen Object to get the target element (by ID)
//     const counterElement = screen.getByTestId("counter");
//     // check if the value of the element is 0.
//     expect(counterElement).toHaveTextContent(0);
// });


// test('the decrement button shows the right sign', () => {
//     render(<App />);
//     //use Screen Object to get the target element (by ID)
//     const buttonElement = screen.getByTestId("minus-button");
//     // check if the value of the element is minus.
//     expect(buttonElement).toHaveTextContent("-");
// })

// test('the increment button shows the right sign', () => {
//     render(<App />);
//     //use Screen Object to get the target element (by ID)
//     const buttonElement = screen.getByTestId("plus-button");
//     // check if the value of the element is minus.
//     expect(buttonElement).toHaveTextContent("+");
// })

// test('When the click event fires, it increments the displayed count', () => {
//     render(<App />);
//     //use Screen Object to get the target element (by ID)
//     const buttonElement = screen.getByTestId("plus-button");
//     // check if the number has changed.
//     fireEvent.click(buttonElement);
//     const counterElement = screen.getByTestId("counter");
//     expect(counterElement).toHaveTextContent(1); // 딱 1로 숫자말고 ++ 되는 걸로 하려면? count +1 처럼?
// })