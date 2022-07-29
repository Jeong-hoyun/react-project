import { useState,useEffect } from 'react';
import {  } from 'antd';
import style from './coinCheck.module.css'
import Clock from 'react-live-clock';
function CoinCheck(){
const [loading,setLoading]=useState();
const [coins,setCoins]=useState([])
const [serchvalue,setSerchvalue]=useState(0)
const [select,setSelect]=useState("Bitcoin")
useEffect(()=>{
    //json사용시 ()사용할것
  fetch("https://api.coinpaprika.com/v1/tickers")
  .then((response)=>response.json())
    .then((json)=>      
        setCoins(json),
        setLoading(false)    
    )
},[])

const onChange=(e)=>{
    coins.map( (coins) => {
 
        if(coins.name===select){
            const BTC=(coins.quotes.USD.price).toFixed(3)
            const value =e.target.value
            const sum=(value/BTC).toFixed(2)
        
         setSerchvalue((e.target.value)+'달러로 살수 있는 수는 '+sum+'개입니다')        
        
         }
     })
}

const onChange2=(e)=>{ 
    setSelect(e.target.value)
    setSerchvalue('')
    console.log(e.target.value)
}



return(
    <div className='coinDiv' >
    <h1>COIN CHECK!</h1>
    <h2>{select}</h2>
    <input type='number' onChange={onChange} ></input>
    <p>{serchvalue}</p>
    <div>
    <Clock className='Clock'  format={'YYYY년 HH시 mm분 ss초'} ticking={true}  ></Clock>
    </div>
    {loading? <strong>Loding...</strong>:null}
    <select onChange={onChange2}>
    {coins.map((coins,index)=>
    <option key={index} value={coins.name}>
    {coins.name} ({coins.symbol}) : { coins.quotes.USD.price}
    </option>
    )}
    </select>
    </div>)
}

export default CoinCheck