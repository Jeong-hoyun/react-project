import React from 'react';

function MyComponet(someProps){
    console.log(someProps)
    return(
        <div>
        hello {someProps.text1}
        <br/>
        {someProps.children}
        </div>
    )
}

function Props(){
let toggle=true
if(toggle){
    return(
        <div>
        {MyComponet({
            text1:'world',
            children:<MyComponet text1='gree'/>
        })
        // <MyComponet 
         }
        
        </div>
    )

}else{
    return(
        <div>
        {MyComponet({
            text1:'world',
            children:<MyComponet text1='korea'/>
        })}
        </div>
    )


}

}

export default Props


