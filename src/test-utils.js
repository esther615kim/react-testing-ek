import { render } from "@testing-library/react";
import { OrderContextProvider } from "./context/orderContext";

const customRender = (ui, options) =>
  render(ui, { wrapper: OrderContextProvider, ...options }); // spread operation로 옵션 나열

export * from "@testing-library/react"; // 읭?

export { customRender as render };
