import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { IData } from "@/models/index";

interface Props {
  data: IData[];
  handleChange: (item: IData) => void;
}
interface CheckIconProps {
  className: string;
}
function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RadioButton({ data, handleChange }: Props) {
  const [selected, setSelected] = useState<string>("");

  return (
    <RadioGroup
      value={selected}
      onChange={setSelected}
      className="relative flex flex-col gap-5 p-3"
    >
      {data.map((item) => (
        <RadioGroup.Option
          value={item.school}
          key={item.id}
          onClick={() => handleChange(item)}
          className={({ active, checked }) => `${
            active
              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
              : ""
          }
              ${checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
              relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
        >
          {({ checked }) => (
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <div className="text-sm">
                  <RadioGroup.Label
                    as="p"
                    className={`font-medium  ${
                      checked ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.lessons} Lessons
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={`inline ${
                      checked ? "text-sky-100" : "text-gray-500"
                    }`}
                  >
                    <span>
                      in
                      {item.school}
                    </span>{" "}
                  </RadioGroup.Description>
                </div>
              </div>
              {checked && (
                <div className="shrink-0 text-white">
                  <CheckIcon className="h-6 w-6" />
                </div>
              )}
            </div>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
