import { render, screen } from "@testing-library/react";
import Type from './../Type';

test("Should display the corresponding image data when requested", async () => {
    render(<Type orderType="products" />);
    // test images
    const productImages = await screen.getAllByRole('img',
        { name: /product$/i } //regEx
    );
    expect(productImages).toHaveLength(2); // number of images
    // test alt text
    const altText = productImages.map(item => item.alt);
    expect(altText).toEqual(["New York product", "London product"])

})