import  { useState,useEffect } from 'react';


function Todolist(){
const [toDo,setToDo]=useState("")
const [toDos,setToDos]=useState([1,2,3,4]);
const onChange=(e)=>setToDo(e.target.value)
const onSubmit=(e)=>{
    e.preventDefault();
    if(toDo===""){
        return;
    }
    setToDo("") 
    setToDos(current=>[toDo, ...current])
}
    return(<div>
        <h2>My TodoLIST</h2>
        <form>
        <input type='text' 
        onChange={onChange}
        value={toDo}
        placeholder='Search for..'></input>
        <button onClick={onSubmit}>ADD to</button>
        <ul>
        {  toDos.map( (current,index)=><li key={index}>{current}</li>
         )  }        
        </ul>
        </form>           
        </div>)


}

export default Todolist