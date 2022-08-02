import React,{useState} from "react"; 
import CommentItem from './CommentItem'
export default function Comments({commentList}){
  return(
    <div>
       {commentList.map( ( comment,index)=>{
        <CommentItem
        key={index}
        name={comment.name}
        content={comment.content}
        likes={comment.likes}         
        />
       })}
    </div>
  )
}