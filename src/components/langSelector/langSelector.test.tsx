import { render, screen } from "@testing-library/react";
import LangSwitcher from ".";

it("First Test", async () => {
  render(<LangSwitcher />);
  const DropDownElement = screen.getByText(/motherfucker/i);
  expect(DropDownElement).toBeInTheDocument();
});
