import React,{useState} from "react"; 
import Comments from "./comments";
const api="https://apis.data.go.kr/5080000/crltsInfoService/getCrltsInfo?serviceKey=CTfN6l9Lli4KNYec%2ByGSsQlJgoodvUq1lpQQEcFv3mYo6eR2gx95V6t0j5yLoomQtdyVjVGoj2UdrpzckVACFA%3D%3D"


const commetList=[
    {name:"hoyun",content:"msg1",likes:1},
    {name:"homin",content:"msg2",likes:1},
    {name:"hoban",content:"msg3",likes:1}
]


export default function Memo(){
    const [commments, setcommments] = useState(commetList);
  
    return <Comments commetList={commments} ></Comments>
  
  }