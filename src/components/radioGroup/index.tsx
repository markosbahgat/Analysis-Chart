import { classNames } from "@/shared";
import { IData } from "@/models/index";

interface Props {
  data: IData[];
  handleChange: (item: IData) => void;
  colorArr: string[];
}
/**
 * @component This is a collection of radio inputs that is being displayed besides the chart
 * @params it takes 3 params which are (data, colorArr, handleChange)
 * @param data type IData[].
 * @param colorArr type string[].
 * @param handleChange type callback function that takes one param (item:IData) and return void.
 * @returns This component should return JSX.Element type.
 */
export default function RadioButton({ data, colorArr, handleChange }: Props) {
  return (
    <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5 flex flex-col items-start p-10 gap-5 justify-between">
        {data.map((button) => {
          const currentColor =
            colorArr[Math.floor(Math.random() * colorArr.length)];
          return (
            <div key={button.id} className="relative flex items-start">
              <div className="flex items-center h-10">
                <input
                  id={button.id}
                  aria-describedby={`${button.id}-description`}
                  name="plan"
                  type="radio"
                  defaultChecked={button.id === "small"}
                  className={classNames(
                    `focus:ring-gray-400`,
                    "hover:cursor-pointer h-4 w-4 border-gray-300"
                  )}
                  style={{
                    color: currentColor
                  }}
                  onChange={() => handleChange(button)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor={button.id}
                  className={classNames(`font-bold text-3xl radio-label`)}
                  style={{ color: currentColor }}
                >
                  {button.lessons}
                </label>
                <span className="ml-1 text-lg">lessons</span>
                <p className="ml-2">in {button.school}</p>
              </div>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
