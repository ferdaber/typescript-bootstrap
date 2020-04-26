import { isValidElement } from "react";
import App from "src/components/App";

test("App", () => {
  expect(isValidElement(App())).toBeTruthy();
});
