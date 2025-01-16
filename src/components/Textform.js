import React,{useState} from 'react'

export default function Textform(props) {
  const [text,setText] = useState('');
  const handleUpOnClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  const handleLoOnClick=()=>{
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("converted to lower case","success")
   }
   const handleClearText=()=>{
    let newText='';
    setText(newText)
    props.showAlert("Text has been cleared","success")
  }
  const handleCopy=()=>{
    var text=document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied sucessfully!","success")
  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space sucessfully!","success")
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  //setText("new text")=>new text to change the state.
  return (
    <>
    <div className='container my-3' style={{backgroundColor:(props.mode==='dark')?'#355f9d':'white',color:(props.mode==='dark'?'white':'black')}} >
     <h2>{props.heading}</h2>
     <div className="mb-2">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:(props.mode==='dark')?'#355f9d':'white',color:(props.mode==='dark'?'white':'black')}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpOnClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoOnClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
  <div className='container my-3' style={{backgroundColor:(props.mode==='dark')?'#355f9d':'white',color:(props.mode==='dark'?'white':'black')}} >
    <h2>Your text summary</h2>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
     <p>{0.008*text.split(" ").length} Minutes read</p>
     <h2>preview</h2>
     <p>{text.length>0?text:'Enter something above to preview here'}</p>
  </div>
    </>
    
  )
}
