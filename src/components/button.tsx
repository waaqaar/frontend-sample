import React from "react";
import { ButtonProps } from "../types";

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="flex items-center bg-blue-500 text-white gap-1 px-4 py-3 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
    >
      {text}
    </button>
  );
};
