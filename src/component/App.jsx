import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import CreatArea from "./CreatArea";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "./notes";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreatArea onAdd={addNote} />
      {notes.map((el, index) => (
        <Note
          key={index}
          id={index}
          title={el.title}
          content={el.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
