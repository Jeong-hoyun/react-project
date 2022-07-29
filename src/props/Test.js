
import React from 'react'; 
// 1부터 100까지 들어있는 arr 

const arr = Array.from(Array(100), (_, i) => i+1);
//arr.filter((e)=>e%10) 와 a%10===0?
function Test(){ 

  return ( 
    <div> 
    {arr.map((a) => (
        a%10===0?
        ""
        :
        <button key={a}>             
          {a%7===0?'7의배수':a}         
        </button> 
      ))}
    </div> 
  ) 
}

export default Test