import  { useState, useEffect} from 'react';
import Data from './data';
// react rule 함수명의 첫글자는 대문자로!

function Clean(){
    const [Show,setShow]=useState(false);

    const onClick =()=> setShow((prev)=>!prev)

    return(
        <div>
          {Show? <Data /> :null}
        <button onClick={onClick} >test</button>
        </div>
    );


}

export default Clean

