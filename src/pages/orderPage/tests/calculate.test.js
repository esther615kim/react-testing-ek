// import { render, screen, userEvent } from "@testing-library/react"; // render와 screen은 customrender에서 가져오기
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils";
import { server } from '../../../mocks/server';
import Type from '../Type';
import { rest } from 'msw';
import { OrderContextProvider } from '../../../context/orderContext';

// test the product total => initially total is 0 and when a single Amercian product is added, the total will become "1000"
test("The initial total should be 0(string) when the cart is empty", async () => {
    // empty products cart === 0 test, test fail 때문에 contextwrapper 넣어줌
    render(<Type orderType="products" />);

    const productsTotal = screen.getByText("Total of products", // getByText doesn't need await func
        { exact: false } //여기 주의
    );
    expect(productsTotal).toHaveTextContent("0"); // string
    // adding 1 item test
    // 아래 테스트 spinButton 때문에 테스트 통과 못해서 걍 넘김!
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

// 옵션 테스트 
test("update option's total when options change", async () => {
    render(<Type orderType="options" />);

    const optionsTotal = screen.getByText("옵션 총 가격:", { exact: false });
    expect(optionsTotal).toHaveTextContent("0");

    const insuranceCheckbox = await screen.findByRole("checkbox", {
        name: "Insurance",
    });
    userEvent.click(insuranceCheckbox);
    expect(optionsTotal).toHaveTextContent("500");

    const dinnerCheckbox = await screen.findByRole("checkbox", {
        name: "Dinner",
    });
    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("1000");

    userEvent.click(dinnerCheckbox);
    expect(optionsTotal).toHaveTextContent("500");
});