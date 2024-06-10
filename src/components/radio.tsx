import React from "react";
import { Radio } from "../types";
import { Heading } from "./heading";

export const RadioComponent = (props: Radio) => {
  const { setSelectedOption, selectedOption, dispatch } = props;

  const options = ["Option A", "Option B", "Option C"];

  return (
    <div className="mb-4 flex flex-col gap-5">
      <Heading text="Select an Option" />

      <div className="flex flex-col gap-5">
        {options.map((option) => (
          <label key={option} className="mr-4 text-lg font-normal">
            <input
              type="radio"
              name="options"
              value={option}
              checked={selectedOption === option}
              onChange={() => dispatch(setSelectedOption(option))}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
