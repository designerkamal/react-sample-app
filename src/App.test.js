import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

/** TODO: add more tests */
test("Renders App", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Customer Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
