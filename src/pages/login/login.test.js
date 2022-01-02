import Login from './index'
import { render,screen,userEvent } from '@testing-library/react';

describe("initial status",()=>{

    test("should have right description for login page",()=>{
        // render the component
        render(<Login/>);
        // target element
        const titleElement = screen.getByText(/let's login/i);
        // assertion
        expect(titleElement).toBeInTheDocument();
    })

    test("inputs should be empty initially", ()=>{ 

        render(<Login/>);
        const emailInputElement = screen.getByRole("textbox");
        const passwordInputElement = screen.getByLabelText("password");
        const passwordConfirmInputEl = screen.getByLabelText(/confirm password/i);
        
        expect(emailInputElement).toHaveValue("");
        expect(passwordInputElement.value).toBe("");
        expect(passwordConfirmInputEl.value).toBe("")
    })
})

describe("functionality & handling errors",()=>{
    test("should be able to type in the email input",()=>{
        render(<Login/>);
        const emailInputEl = screen.getByRole("textbox",{id:"email"});
        // console.log(emailInputEl);
        userEvent.type(emailInputEl, 'chu@gmail.com');
        expect(emailInputEl).toHaveValue('chu@gmail.com')
    }) 
})

describe("expected outcomes",()=>{
    test("should be able to type in password input",()=>{
        render(<Login/>);
        const passwordInputEl = screen.getByLabelText("password");
        userEvent.type(passwordInputEl,"1234!");
        expect(passwordInputEl.value).toBe("1234!")
    }) 
})

// test list
// right description for the page DONE
// email address -valid DONE
// password.length at least 6 or more
// password & confirmed pw should match
//  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/