import {render,screen} from '@testing-library/react';
import Basket2 from './index';

describe("initial status",()=>{
    test("should have right description when empty",()=>{
        render(<Basket2/>);
        const initialMessageElement = screen.getByText(/Your basket is empty/i);
        expect(initialMessageElement).not.toBeInTheDocument();
    })
    test("should have total when it is not empty",()=>{
        render(<Basket2/>);
        const initialMessageElement = screen.queryByRole("heading", { level: 6 });
        expect(initialMessageElement).toBeInTheDocument();
    })
});

describe("functionality",()=>{});

describe("async funcs",()=>{});
