import React, { useState, FormEvent } from "react";
import { setDiscountCode } from "../redux/slices/appSlice";
import { generateRandomCode } from "../utils/helper";
import { Heading } from "./heading";
import { Button } from "./button";

export const DiscountComponent = ({ dispatch }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");

  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCode(value);
    dispatch(setDiscountCode(value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate the code
    if (!/^DISCOUNT\d{4}$/i.test(code)) {
      setError("Invalid code. Code should be in the format DISCOUNT2024.");
      return;
    }

    setError("");

    const newCode = generateRandomCode();
    setGeneratedCode(newCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 flex flex-col gap-5">
        <Heading text="Enter Discount Code" />

        <input
          type="text"
          value={code}
          onChange={handleCode}
          className="border-1 w-full p-4 rounded-lg text-lg outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
          placeholder="DISCOUNT2024"
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="mb-4">
        <Button text="Generate Discount Code" />
        {generatedCode && (
          <p className="mt-2">Generated Code: {generatedCode}</p>
        )}
      </div>
    </form>
  );
};
