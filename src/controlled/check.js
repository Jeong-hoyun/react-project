
import React,{useRef,useState,useEffect} from "react";


function LoopInput(type){
    const [v,setv]=useState()
    const onChange=(e)=>{
       setv(e.target.value)
    }
    return <input type={type} value={v} onChange={onChange}></input>     
  }



const Check = () => {  
    const idRef=useRef();
    const pwdRef=useRef();
    const [checking,setchecking]=useState(true);
    const [pwd,setPwd]=useState('');
    const [id,setid]=useState('');


   const  onPwd =(e)=>{
    setPwd(e.target.value)
    if(id.length>1){
        setchecking(false)
    }
   }
   const  onID =(e)=>{
    setid(e.target.value)
    if(pwd.length>1){
        setchecking(false)
    }
   }
    
   const onClick=()=>{
      if(id.length>=6&&id.length<=20&&pwd.length>=6&&pwd.length<=20){
         alert('회원가입 완료!')
      }else if(pwd.length<6||pwd.length>20){
        alert('회원가입 실패! 패스워드를 확인해주세요')
        pwdRef.current.focus();    
        setPwd('');
      }else if(id.length<6||id.length>20){
        alert('회원가입 실패! 아이디를 확인해주세요')
        idRef.current.focus();        
      }
   }

    return ( 
      <div> 
        <div> 
          <input 
            type="text"
            value={id} 
            onChange={onID}
            name='id' 
            placeholder='6글자 이상 20글자 이하' 
            ref={idRef}          
          /> 
          {id.length>=6&&id.length<=20?"유효한 ID입니다":"유효하지 않은 ID입니다"} 
        </div> 
        <div> 
          <input 
            type="text" 
            value={pwd}
            name='password' 
            placeholder='12글자 이상 20글자 이하' 
            onChange={onPwd}
            ref={pwdRef}          
          />           
          {pwd.length>=6&&pwd.length<=20?"유효한 password입니다":"유효하지 않은 password입니다"}
        </div> 
        <button type="button" onClick={onClick} disabled={checking} >회원가입</button>
         <LoopInput/>
      </div> 
    )
}

export default Check