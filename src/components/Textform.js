import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('Enter the text');

  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
    const handleLowClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <div className='container my-3'>
        <h1>Your test summary</h1>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
    <p> {text}</p>         

      </div>
    </div>
  );
}
