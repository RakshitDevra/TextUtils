import React, {useState} from 'react'

export default function Textform(props) {

    const [text,setText]=useState("");
    const handleupclick = () => {
        // console.log("Uppercase was clicked on " + text);
        const newText=text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Upperscase!","success ")

    }
    const handledownclick = () => {
        // console.log("Lowercase was clicked on " + text);
        const newText=text.toUpperCase();

        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success ")

    }
    const handleclearclick = () => {
        setText('');
        props.showAlert("Text Cleared!","success ")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);

    }
    // button given by a student
    const handleCopy =() => {
      var text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard!","success ")
    }
    // button given by a student
    const handleExtraSpaces= () =>{
      let newText=text.split(/[*]+/);
      setText(newText.join(" "))
      props.showAlert("Extraspaces Removed!","success ")
    } 
    let btnstyle={
      marginLeft:13

    }
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>

  <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
    
    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#2e2424':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="13"></textarea>
  </div>
  <button className='btn btn-info' onClick={handleupclick} style={btnstyle} >Convert to uppercase</button>
  <button className='btn btn-secondary ' onClick={handledownclick} style={btnstyle} >Convert to Lowercase</button>
  <button className='btn btn-warning  '   onClick={handleclearclick}  style={btnstyle}>Clear Text</button>
  <button className='btn btn-success  '   onClick={handleCopy}  style={btnstyle}>Copy Text</button>
  <button className='btn btn-danger  '   onClick={handleExtraSpaces}  style={btnstyle}>Remove Extra Spaces </button>
  </div>
  <div className="container my-15px" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
   <p>it will take {0.008*text.split(" ").length} Minutes to read</p>
   <h2>Preview</h2>
   <p>
    {text.length>0?text:"Enter something in the textbox above  to preview it here"}
   </p>
  </div>
  </>
  )
}
