import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption, setNotes } from "../redux/slices/appSlice";
import { AppState } from "../types";
import { RadioComponent } from "../components/radio";
import { DiscountComponent } from "../components/discount";
import { NotesComponent } from "../components/notes";

export const Home = () => {
  const dispatch = useDispatch();

  const { selectedOption, discountCode, notes } = useSelector(
    (state: AppState) => state.app
  );

  return (
    <div className="h-screen flex items-center bg-gradient-to-r from-rose-100 to-teal-100 px-10">
      <div className="container w-full mx-auto flex flex-col gap-10">

        <RadioComponent
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          discountCode={discountCode}
          notes={notes}
          dispatch={dispatch}
        />

        <DiscountComponent dispatch={dispatch} />

        <NotesComponent
          notes={[notes]}
          dispatch={dispatch}
          setNotes={setNotes}
        />
      </div>
    </div>
  );
};
