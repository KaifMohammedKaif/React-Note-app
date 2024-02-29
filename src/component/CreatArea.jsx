import React, { useState } from "react";

function CreatArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-area">
      <form action="">
        <input
          name="title"
          placeholder="Title"
          type="text"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note...."
          rows="4"
          onChange={handleChange}
          value={note.content}
        />
        <button className="btn-add" onClick={submitNote}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreatArea;
