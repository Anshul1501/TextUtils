import React, { useState } from 'react'

export default function TextForm(props) {

  //Handle Upper Case Text
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
//Handle On Change 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const[text, setText] = useState('');

  return (
    <div className="container my-5">
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={handleUpperCase}>Convert to Upper Case</button>
    </div>
  )
}
