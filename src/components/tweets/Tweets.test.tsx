import React from "react";
import { render, screen } from "@testing-library/react";
import Tweets from "./Tweets";

test("renders learn react link", () => {
  render(<Tweets />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
