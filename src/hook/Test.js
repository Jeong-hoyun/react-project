//useRef 

import React from "react"

const Test=()=>{
  const input = React.useRef(null); 
  const [value, setValue] = React.useState('');
  const handleClick = () => { 
    if (input.current) {
      input.current.value=''   
    } 
  } 
  const handleChange = () => { 
    setValue(input.current.value)
  } 

  return ( 
    <div>input의 값은 {value}입니다           
      <input type="text" ref={input} onChange={handleChange}/>검색 
      <button type="button" onClick={handleClick}>Click to Reset</button> 
    </div> 
  ); 
}

export default Test