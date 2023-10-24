import { useState } from "react";
import { useParams } from "react-router-dom";

import {postNewComment} from '../apis/api'
const NewComment = ({update})=>{
    const {article_id} = useParams();
    const [username, setUsername]=useState("")
    const [newComment, setNewComment]=useState("")
    const [postData, setPostData]=useState({})

    const [displayToggle,setDisplayToggle]=useState(false)
    const [processingPost,setProcessingPost]=useState(false)
    const [postSuccess,setPostSuccess]=useState(false)
    const [postFail,setPostFail]=useState(false)


    const handleToggle = (e)=>{
        e.preventDefault();
        setPostSuccess(false)
        setPostFail(false)
        setDisplayToggle(true)
        setUsername("")
        setNewComment("")
    }

    const handleSumbit =(e)=>{
        e.preventDefault();
        
        const postableComment={
            body:newComment,
            username:username
        }
        setProcessingPost(true);
        setDisplayToggle(false);
        postNewComment(article_id,postableComment)
        .then((response)=>{
            console.log("Response",response)
            setProcessingPost(false)
            setPostData(response)
            console.log("PostData",postData)
            setPostSuccess(true)
            update();

    
        }).catch((res)=>
        {setPostFail(true)
        })
 
  
    }
  
    
    return (
        <div>
            <button onClick={handleToggle}>Enter New Comment</button>
            <div>
                {displayToggle && <form className="newCommentForm" onSubmit={handleSumbit}>
                    <label htmlFor="username">Username</label>
                    <input  
                    id="username"
                    value={username}
                    required
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />

                    <label htmlFor="newComment">Comment</label>
                    <input  
                    id="newComment"
                    type="text"
                    value={newComment}
                    required
                    onChange={(e)=>{
                        setNewComment(e.target.value)
                    }} />

                    <button type="submit">Submit</button>
                    </form>} 
                {postSuccess&& <p>Post Successful</p>}
                {postFail&& <p>Post Failed</p>}
            </div>
        </div>
    )


}

export default NewComment;            