import { render, screen } from "../../../test-utils";
import { server } from '../../../mocks/server';
import Type from '../Type';
import { rest } from 'msw';

//test1 get img
test.skip("Should display the corresponding images when requested", async () => {
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


