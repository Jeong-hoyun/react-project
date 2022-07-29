import React,{useEffect,useState} from "react";

function App() {
 const [counter,setValue]=useState(0)
 const [keyword,setkeyword]=useState("")
 const onClick=()=>setValue((prev)=>prev+1)

 const onChange=(event)=>setkeyword(event.target.value);


 const OnlyOnce=()=>{
  console.log('CAll API')
 }
 useEffect(()=> {
 if(keyword!==""&& keyword.length>5){
  console.log('search',keyword)
 }}
  ,[keyword])
 useEffect(()=>OnlyOnce,[])

  return (
    <div className="App">
    <input type='text'
     placeholder="Search here.."
     onChange={onChange} value={keyword}></input>
    <h4>{counter}</h4>
    <button onClick={onClick}>onClick</button>
    <button>test</button>
    </div>
  );
}

export default App;
