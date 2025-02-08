import React,{useState} from 'react'

export default function Textform(props) {

    //Using State(one type of Hook)
    const [Text, setText] = useState("");
    //text="ekdjwljd"//Wrong way to change the value in State
    //setText("eefkdjsj")//Correct Way to change the value in State
    

    //On-Click Function(UpperCase)
    const handleUpClick = () => {
      //console.log("Uppercase button was clicked" + Text);
      let newText = Text.toUpperCase();
      setText(newText);
      props.showAlert("Converterd to Upper Case", "success")
    };
    
    //On-Click Function(LowerCase)
    const handleLowClick = () => {
        //console.log("Lowercase button was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converterd to Lower Case", "success")
      };

    //On-Click Function(Remove space)
    const handleSpaceClick = () => {
        console.log("spaces" + Text);
        let newText = ""
        let word = Text.split(" ")
        for(let i=0; i<word.length; i++){
            newText += word[i]
        }
        setText(newText);
        props.showAlert("Spaces are removed", "success")
      };

    //On-Click Function(Undo)
    const handleClearClick = () => {
        let newText = ''
        setText(newText);
        props.showAlert("Text Area is cleared", "success")
      }; 
      

    //As we want to change the Text area(Value): We need onchange Function.
    const handleOnChange = (event) => {
      //console.log("On Change");
      setText(event.target.value);
    };

    const handleCopy = () => {
      var text = document.getElementById('TextForm');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied successfully", "success")
    }; 

    const handleRemoveExtraSpace = () =>
    {
      let newText = Text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra space", "success")
    }

  return (
    <>
    <div className='container' style={{color:props.mode === 'light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="TextForm" className="form-label"></label>
        <textarea className="form-control" value={Text} style={{backgroundColor:props.mode === 'light'?'white':'#373b3e', color:props.mode === 'light'?'black':'white' }} onChange={handleOnChange} id="TextForm" rows="8"></textarea>
      </div> 
      <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} text-light mx-2 my-2`} onClick={handleUpClick} disabled={Text.length===0}>Change to Uppercase</button>
      <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} text-light mx-2 my-2`} onClick={handleLowClick}  disabled={Text.length===0}>Change to Lowercase</button>
      <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} text-light mx-2 my-2`} onClick={handleSpaceClick}  disabled={Text.length===0}>Remove spaces</button>
      <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} text-light mx-2 my-2`} onClick={handleRemoveExtraSpace}  disabled={Text.length===0}>Manage Space</button>
      <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} text-light mx-2 my-2`} onClick={handleCopy}  disabled={Text.length===0}>Copy Text</button>
      <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} text-light mx-2 my-2`} onClick={handleClearClick}  disabled={Text.length===0}>Clear</button>
      
    </div>
    <div className="container my-3"style={{color:props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} Words  {Text.length} Characters are there</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>

        <h2>Preview Your Text</h2>
        <p>{Text.length>0?Text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
