//useRef 

import React from "react"


const Test=()=>{
  const input =React.useRef(null);
  const handleCilck=()=>{
    if(input.current){
      input.current.value=''
    }
  }
  return(
    <div>
    <input type='text' ref={input}/>
    <button type="button" onClick={handleCilck}/>
    </div>
  )
}

export default Test