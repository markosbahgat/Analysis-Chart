import { render, screen } from "@testing-library/react";
import { IData } from "@/models";
import { chartState } from "@/slices/index";
import DropDown from ".";
import { useAppSelector } from '@/store/hooks';
import { Provider } from "react-redux";
import store from "@/store";

const MockDropDown = () => {
  const state = useAppSelector(chartState);
  return (
    <Provider store={store}>
      <DropDown
        data={[
              ...new Set(state.allData.map((item: IData) => item.country))
            ]}
        label="Country"
        type="country"
        selected={null}
        handleChangeSelection={function (item: string, type: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Provider>
  )
}

function TestingDropDown() {
  
  test("Test", async () => {
    render(<MockDropDown/>);
    const DropDownElement = screen.getAllByTestId("ListBox_options");
    expect(DropDownElement.length).toBe(4);
  });
}

TestingDropDown()
