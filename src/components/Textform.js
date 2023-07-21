import React , {useState} from 'react';

export default function Textform(props) {
 const handleupclick =()=>{
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText)
 }
 const handleloclick =()=>{
    console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText)
 }
 
 const handleonChange=(event)=>{
    console.log("on Chnage");
    setText(event.target.value)
 }

const [text,setText]=useState('Enter text here')
  return (
    <>
    <div className="container">
<h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button className="btn.btn-primary mx-3" onClick={handleupclick}> Convert toUpperCase</button>
<button className="btn.btn-primary mx-3" onClick={handleloclick}> Convert toLowerCase</button>


</div>
<div className='container'>
<h1>
    Your text summary
</h1>
<p>
    {text.split(" ").length}word and {text.length} characters</p>
<p>{0.008*text.split(" ").length}Minutes read</p>
<h2>Preview</h2>
<p>
    {text}
</p>
</div>
  
</>
   
  );
}
