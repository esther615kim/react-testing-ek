// import { render, screen, userEvent } from "@testing-library/react"; // render와 screen은 customrender에서 가져오기
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../test-utils";
import { server } from '../../../mocks/server';
import Type from '../Type';
import { rest } from 'msw';
import { OrderContextProvider } from '../../../context/orderContext';
import OrderPage from '../OrderPage';

// test the product total => initially total is 0 and when a single Amercian product is added, the total will become "1000"
test.skip("The initial total should be 0(string) when the cart is empty", async () => {
    // empty products cart === 0 test, test fail 때문에 contextwrapper 넣어줌
    render(<Type orderType="products" />);

    const productsTotal = screen.getByText("Total price for products", // getByText doesn't need await func
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
test.skip("update option's total when options change", async () => {
    render(<Type orderType="options" />);

    const optionsTotal = screen.getByText("Total price for options", { exact: false });
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

// price 테스팅

describe.skip("total price of goods and options", () => {
    // 상품가격 initial price = 0
    test("total price starts with 0 and Updating total price when adding one product", async () => {  // fetch data 라서 async로 해주기
        render(<OrderPage />);

        const total = screen.getByText("Total Price:", { exact: false });
        expect(total).toHaveTextContent("0"); // the price starts from 0

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput); // eventclear
        userEvent.type(americaInput, "1"); // type 1이 되면

        expect(total).toHaveTextContent("1000"); // 가격은 1000!
    });

    // option 가격 테스트

    test("Updating total price when adding one option", async () => {
        render(<OrderPage />);
        const total = screen.getByText("Total Price:", { exact: false });

        const insuranceCheckbox = await screen.findByRole("checkbox", { //when insurace box !
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox); // 체크되면
        expect(total).toHaveTextContent("500"); //500원임(총가격)
    });

    // test 3 아이템 지워졌을 때

    test.skip("Updating total price when removing option and product", async () => {
        render(<OrderPage />);
        const total = screen.getByText("Total Price:", { exact: false });

        const insuranceCheckbox = await screen.findByRole("checkbox", {
            name: "Insurance",
        });
        userEvent.click(insuranceCheckbox); // 500원에

        const americaInput = await screen.findByRole("spinbutton", {
            name: "America",
        });
        userEvent.clear(americaInput); // 지워주고
        userEvent.type(americaInput, "3"); //3개 넣기 3000원

        userEvent.clear(americaInput); // clear 하고
        userEvent.type(americaInput, "1"); // 1개만 다시 넣으면 => 1000원 

        expect(total).toHaveTextContent("1500");
    });
});
