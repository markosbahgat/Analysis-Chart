import { render, screen } from "@testing-library/react";
import DropDown from ".";

it("First Test", async () => {
  render(
    <DropDown
      data={[]}
      label=""
      type=""
      selected={null}
      handleChangeSelection={function (item: string, type: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
  const DropDownElement = screen.getByText(/motherfucker/i);
  expect(DropDownElement).toBeInTheDocument();
});
