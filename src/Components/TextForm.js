import React, { useState } from 'react'




export default function TextForm(props) {


  const [text, setText] = useState('');
  //text="New Text"       //this is the wrong way




  const handleUpClick = () => {
    // console.log("handleUplick id fired")
    setText(text.toUpperCase())
    props.showAlert("Converted to UPPERCASE","success")
  }
  const handleLowClick = () => {
    // console.log("handleUplick id fired")
    setText(text.toLowerCase())
    props.showAlert("Converted to lowercase","success")
  }
  const clearTextClick = () => {
    // console.log("handleUplick id fired")
    setText('')
    props.showAlert("Cleared text","success")
  }

 const copyText=()=>{
  // let text=document.getElementById('myBox')
  // text.select()
  // navigator.clipboard.writeText(text.value)
  navigator.clipboard.writeText(text)
  // document.getSelection().removeAllRanges()
  props.showAlert("Text Copied","success")
 } 
 

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })


  // const [btnText,newBtnText]=useState('Enable dark mode')
  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     })
  //     newBtnText('Disable dark mode')

  //   }

  //   else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     newBtnText('Enable dark mode')
  //   }
  // }


  const onChangefired = (e) => {
    // console.log('onchange is fired')
    setText(e.target.value)
  }
  return (
    <div className='container' >
      <div>
        <h1 className=" my-3">Text Analyser and Converter</h1>
        <div className="mb-3 my-5nzn">
          <h5>{props.heading}</h5>
          <textarea className="form-control" value={text} onChange={onChangefired} id="myBox" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={clearTextClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={copyText}>Copy text</button>
        {/* <button className="btn btn-success mx-2" onClick={toggleStyle}>{btnText}</button> */}
      </div>

      <div className="container">
        <h2 className=' my-2'> Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read this.</p>
      </div>

      <div className='mx-2' >
      <button className="btn btn-success my-2 " >Preview</button>
        <p>{text.length>0?text:"Enter some text to preview  it"}</p>
      </div>
      
      

    </div>
  )
}


