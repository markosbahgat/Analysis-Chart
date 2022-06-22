import { render, screen } from "@testing-library/react";
import LangSwitcher from ".";

it("First Test", async () => {
  render(<LangSwitcher />);
  const DropDownElement = screen.getByText(/Testid/i);
  expect(DropDownElement).toBeInTheDocument();
});
