import { render, screen } from "@testing-library/react";
import { server } from '../../../mocks/server';
import Type from './../Type';
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

//test2 data-fetching error test
test("Should pop an error banner when the requested data is not fetched.", async () => {
    // 여기는 data fetching 먼저 => render Type 순서로
    rest.get('http://localhost:5000/products'), (req, res, ctx) => res(ctx.status(500))
    render(<Type orderType="products" />);

    const errorBanner = await screen.findByTestId("error-banner") // 가능?
    expect(errorBanner).toHaveTextContent("An error occurred")
});

