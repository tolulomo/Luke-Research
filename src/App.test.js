import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders explanation text and starting directions", () => {
  const { getByText } = render(<App />);
  const explanationTextHeader = getByText(
    /Let's create a view that displays user data grouped by the project each user is working on/i
  );
  const directionsElement = getByText(/Start by looking at /i);
  expect(explanationTextHeader).toBeInTheDocument();
  expect(directionsElement).toBeInTheDocument();
});
