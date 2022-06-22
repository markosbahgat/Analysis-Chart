import { render, screen } from "@testing-library/react";
import Toggle from ".";

it("First Test", async () => {
  render(
    <Toggle
      themeChanger={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const DropDownElement = screen.getByText(/Testid/i);
  expect(DropDownElement).toBeInTheDocument();
});
