import { render, screen } from "@testing-library/react";
import Layout from ".";

it("First Test", async () => {
  render(
    <Layout
      children={undefined}
      themeChanger={function (): void {
        throw new Error("Function not implemented.");
      }}
      isDarkModeOn={false}
    />
  );
  const DropDownElement = screen.getByText(/Testid/i);
  expect(DropDownElement).toBeInTheDocument();
});
