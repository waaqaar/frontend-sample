import React, { useState } from "react";
import { Notes } from "../types";
import { Button } from "./button";

export const NotesComponent = (props: Notes) => {
  const { notes, dispatch, setNotes } = props;

  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    dispatch(setNotes(newNote));
    setNewNote("");
  };

  return (
    <div className="mb-4 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Notes</h2>

      <textarea
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        className="border-1 w-full p-4 rounded-lg text-lg outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 shadow-md"
        rows={4}
        placeholder="Enter your notes here..."
      />
      <div>
        <Button text="Add note" onClick={handleAddNote}/>
      </div>
    </div>
  );
};
