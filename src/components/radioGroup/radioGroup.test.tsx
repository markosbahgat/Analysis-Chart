import { IData } from "@/models";
import { render, screen } from "@testing-library/react";
import RadioButton from ".";

it("First Test", async () => {
  render(
    <RadioButton
      data={[]}
      handleChange={function (item: IData): void {
        throw new Error("Function not implemented.");
      } } colorArr={[]}     />
  );
  const DropDownElement = screen.getByText(/Testid/i);
  expect(DropDownElement).toBeInTheDocument();
});
