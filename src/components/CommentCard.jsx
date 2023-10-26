import dateFormat, { masks } from "dateformat";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment } from "../apis/api";


const CommentCard = ({comment,setComments})=>{
    const {userName}=useContext(UserContext);
    const [successDelete, setSuccessDelete]=useState(false)
    const [deleteClick,setDeleteClick]=useState(false);
    const [error, setError]=useState(false);

    const handleDelete=()=>{
        setDeleteClick(true);

        deleteComment(comment.comment_id)
        .then((res)=>{
            setSuccessDelete(true);
        })
        .catch(error=>{
            setError(true)
        })

    }




return(
    <article className="CommentCard">
       {(!successDelete&&!deleteClick&&!error)?        
       <ul>
            <li>{comment.body}</li>
            <li>{comment.votes}</li>
            <li>{dateFormat(comment.created_at,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</li>
            <li>{comment.author}</li>
            <button>Upvote Comment</button>
            <button>Downvote Comment</button>
            {(userName===comment.author)?<button disabled={deleteClick}  onClick={handleDelete}>Delete Comment</button>:null}
        </ul>:
        (successDelete&&deleteClick&&!error)?
        <p>Comment Deleted</p>:
        (!successDelete&&deleteClick&&!error)?
        <p>Delete Pending</p>:
        <p>Delete Unsucessful</p>}
       
       


    </article>
)
}

export default CommentCard;