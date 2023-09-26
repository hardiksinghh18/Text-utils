import React, { useState } from 'react'

export default function Clickme() {
  const [value, setValue] = useState(0)

  
  const [colour, setColour] = useState("purple")
  const[title,setTitle]=useState("Change bg")

  const increaseValue = () => {
    setValue(value + 1)
  }
  const decreaseValue = () => {
    setValue(value - 1)
  }

  const changeColour = () => {
    if(colour==="purple"){
 setTitle("changed")
      setColour("red")
    }
    if(colour==="red"){
      setTitle("change bg")
      setColour("purple")
    }
  }
  return (
    <div style={{backgroundColor: colour,
    height:"50vh"}}>
      <button className="mx-5" onClick={increaseValue}>+</button>
      <button onClick={decreaseValue}>-</button>


      <button className='mx-5' onClick={changeColour}>{title}</button>

      <p>{value}</p>
    </div>
  )
}
