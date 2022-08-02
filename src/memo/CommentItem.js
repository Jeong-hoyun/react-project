import React,{memo} from 'react'


function CommentItem({name,contente,likes}){
    return(
        <div className="commentItem">
        <span>{name}</span>
        <br/>
        <span>{contente}</span>
        <br/>
        <span>{likes}</span>
        <br/>
        </div>
    )
}

export default memo(CommentItem);