import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  screen.getByText("Interview Management Tool");
  expect(screen.getByText("Interview Management Tool")).toBeInTheDocument();
});
