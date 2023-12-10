import React, { useState } from 'react'

export default function TextForm(props) {

  //Handle Upper Case Text
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
  //Handle Lower Case Text
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
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
  <h3>Try TextUtils - word counter, character counter, covert to upper case & lower case</h3>
  <textarea className={`form-control ${props.mode === 'dark' ? 'bg-dark text-light' : ' '}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button type="button" className="btn btn-primary my-2" onClick={handleUpperCase}>convert to upper Case</button>
<button type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>lower case</button>
<button type="button" className="btn btn-danger my-2" onClick={clearText}>clear</button>

<h3 className='my-3'>Your text summary</h3>
<p className='my-3'>characters: {text.split(" ").filter((element)=>{return element.length!==0}).length} & words: {text.split(/\s+/).length-1}</p>
<p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h3>Preview</h3>
<p>{text}</p>
    </div>
  )
}
