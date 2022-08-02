
import React,{useRef,useState} from "react";

const Controlled = () => { 
    const input = useRef(null); 
    const [value, setValue] = useState(''); 
    const handleClick = () => { 
      setValue(''); 
      if (input.current) {  
        input.current.focus(); 
      } 
    }  
     
    return ( 
      <div> 
        <input 
          type="text" 
          ref={input} 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        /> 
        <button type="button" onClick={handleClick}>Click to Reset and Focus</button> 
      </div> 
    ); 
  }


  export default Controlled