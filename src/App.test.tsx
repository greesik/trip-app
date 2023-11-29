import React from "react";
import { render, screen } from "@testing-library/react";
import { TripsList } from "./components/TripsList";

test("renders learn react link", () => {
  render(<TripsList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
