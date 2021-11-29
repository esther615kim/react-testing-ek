import { render, screen, server, userEvent } from '../../../mocks/server';
import App from './App';
import { rest } from 'msw';
import { userEvent } from '@testing-library/user-event';

// step 1 order-flow test
describe("order test", () => {

    test("order flow test #1, product only", async () => {
        render(<App />)
        const input = await screen.findByRole("spinbutton", {
            name: "America",
        })
        // 주문하고
        userEvent.clear(input); // reset
        userEvent.type(input, "1");
        // 클릭하면
        userEvent.click(screen.getByRole("button", { name: "order" }))
        // 확인하기 나타남
        expect(screen.getByRole("headling", {
            name: "my order",
        }))
    })

    test("order flow test #2, product not added", async () => {
        const input = await screen.findByRole("spinbutton", {
            name: "America",
        })
        // 주문하고
        userEvent.clear(input); // reset
        userEvent.type(input, "1");
        // 클릭하면
        userEvent.click(screen.getByRole("button", { name: "order" }))
        // 에러 메시지창 나타나기 
        expect(screen.getByRole("headling", {
            name: "check your order",
        }))
    })
})
// step 2 order confirmation test
// step 3 order complection test
