import { render, screen, userEvent } from "@testing-library/react";
import { server } from '../../../mocks/server';
import Type from '../Type';
import { rest } from 'msw';

// test the product total => initially total is 0 and when a single Amercian product is added, the total will become "1000"
test("The initial total should be 0(string) when the cart is empty", async () => {
    // empty products cart === 0 test
    render(<Type orderType="products" />);

    const productsTotal = screen.getByText("Total of products",
        { exact: false } //여기 주의
    );
    expect(productsTotal).toHaveTextContent("0"); // string
    // adding 1 item test
    const addAmericanProduct = await screen.findByRole("spinButton", {
        name: "America"
    });
    userEvent.clear(addAmericanProduct); // clear the target input just in case
    userEvent.type(addAmericanProduct, "1"); //type event 발생
    expect(productsTotal).toHaveTextContent("1000"); //1000 per 1 item

    // test the product total => initially total is 0 and when 3 british product ared added, the total will become "3000"

    const addUKProduct = await screen.findByRole("spinButton", {
        name: "England"
    });
    userEvent.clear(addUKProduct);
    userEvent.type(addUKProduct, "3");
    expect(productsTotal).toHaveTextContent("4000"); //300 added on top of the existing 1000
})

