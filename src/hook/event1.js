//이벤트 수업
import React from 'react'; 
// 1부터 100까지 들어있는 arr 

const arr = Array.from(Array(100), (_, i) => i+1);
//arr.filter((e)=>e%10) 와 a%10===0?


function Event1(){ 

  return ( 
    <div> 
    {arr.map((a) => (
        
        a%10===0?
        ""
        :
        <button key={a} onClick={()=>{console.log(a)}} text={a}>             
          {a%7===0?'7의배수':a}         
        </button> 
      ))}
    </div> 
  ) 
}

//클릭 이벤트 방식 1  onClick={()=>{console.log(a)}}
//클릭 이벤트 방식 2  onClick={()=>{funcClick}}
//클릭 이벤트 방식 2  const funcClick=()=>{  
//클릭 이벤트 방식 2  const fuc=(a)={ console.log(a) }      }
// 화살표 함수를 통해 인자 접근을 편하게 하면 event객체를 접근하지 않고 처리가 가능하다


