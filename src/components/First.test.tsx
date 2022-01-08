import { render,screen } from '@testing-library/react';
import First from './First';

test.only('should display a welcome message',()=>{
    render(<First/>)
    const textEl = screen.getByText(/welcome/i);
    expect(textEl).toBeInTheDocument();
})
