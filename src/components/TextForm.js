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
//clear Text

const clearText = () => {
    setText('');
}

    const[text, setText] = useState('');

  return (
    <div className="container my-5">
<div className="mb-3">
  <textarea className={`form-control ${props.mode === 'dark' ? 'bg-dark text-light' : ' '}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={handleUpperCase}>convert to upper Case</button>
<button type="button" className="btn btn-primary mx-3" onClick={clearText}>clear</button>

<p className='my-3'>characters: {text.length} & words: {text.split(/\s+/).length-1}</p>
<p>{text}</p>
    </div>
  )
}
