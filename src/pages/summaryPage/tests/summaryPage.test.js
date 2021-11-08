import SummaryPage from './../SummaryPage';
import { render, screen } from "@testing-library/react";

//which method?(matcher)
test("Should thorw an error when the checkbox is not ticked", () => {
    render(<SummaryPage />);
    const checkbox = screen.getByRole('checkbox', {
        name: "Have you checked your order?"
    })
    expect(checkbox.checked).toEqual(false); //matcher

    const confirmButton = screen.getByRole("button", { name: "Confirm Order" });
    expect(confirmButton.disabled).toBeTruthy(); //matcher
})

//npm run test