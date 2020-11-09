import React from "react";

import App from "src/components/App";
import { matchByTextContent } from "src/test-helpers";

test("App", () => {
  const { getByText } = render_test(<App />);
  expect(getByText(matchByTextContent("Hello world!"))).toBeDefined();
});
