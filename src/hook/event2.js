// event2
import React from "react"

function Event2(){

  const onchange1=(e)=>{
    const NumCount=Number(e.target.value)
    setnum1(NumCount)
   }
   const onchange2=(e)=>{
    const NumCount=Number(e.target.value)
    setnum2(NumCount)
   }
   const onClick=()=>{
    setResult(num1+num2)
   }

const [result, setResult] = React.useState(0); 
const [num1, setnum1] = React.useState(0); 
const [num2, setnum2] = React.useState(0); 

 return ( 
   <div> 
     <input type='number' onChange={onchange1}/>    
     <input type='number' onChange={onchange2} />  
     <input type='number' disabled value={result} /> 
     <button type='button' onClick={onClick}>계산</button> 
   </div> 
 )
 }

