import { render, screen } from "../../../test-utils";
import { server } from '../../../mocks/server';
import Type from '../Type';
import { rest } from 'msw';

//test1 get img
test("Should display the corresponding images when requested", async () => {
    render(<Type orderType="products" />);
    // test images, asynchronouos
    const productImages = await screen.findAllByRole('img',
        { name: /product$/i } //regEx
    );
    expect(productImages).toHaveLength(2); // number of images
    // test alt text
    const altText = productImages.map(item => item.alt);
    expect(altText).toEqual(["America product", "England product"]);

})

// test2 data-fetching error test
test("Should pop an error banner when the requested data is not fetched.", async () => {
    // 여기는 data fetching 먼저 => render Type 순서로
    server.resetHandlers(
        rest.get('http://localhost:5000/products'), (req, res, ctx) => res(ctx.status(500))
    );
    render(<Type orderType="products" />)
    const errorBanner = await screen.findByTestId("error-banner") // findbyTest Id 대신 role가능?
    expect(errorBanner).toHaveTextContent("An error has occurred")
});

// test3
test("Should fetch option data from the server when requested", async () => {
    // reder first here!
    render(<Type orderType="options" />);

    const optionCheckBoxes = await screen.findAllByRole("checkbox");

    expect(optionCheckBoxes).toHaveLength(2); // 옵션data 2개만 있음

})


