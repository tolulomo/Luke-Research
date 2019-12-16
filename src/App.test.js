import React from "react";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import App from "./App";

// test("renders explanation text and starting directions", () => {
//   const { getByText } = render(<App />);
//   const explanationTextHeader = getByText(
//     /Let's create a view that displays user data grouped by the project each user is working on/i
//   );
//   const directionsElement = getByText(/Start by looking at /i);
//   expect(explanationTextHeader).toBeInTheDocument();
//   expect(directionsElement).toBeInTheDocument();
// });

it('renders wihout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

