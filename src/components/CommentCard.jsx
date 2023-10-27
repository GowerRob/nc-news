import dateFormat, { masks } from "dateformat";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteComment ,updateCommentVotes} from "../apis/api";
import secondsToTime from '../utils/secondsToTime'
import Voter from './Voter'


const CommentCard = ({comment,setComments})=>{
    const {user}=useContext(UserContext);
    const [successDelete, setSuccessDelete]=useState(false)
    const [deleteClick,setDeleteClick]=useState(false);
    const [error, setError]=useState(false);


    const timeElapsed=(secondsToTime((Date.now()-(new Date(comment.created_at).getTime()))/1000));
    const authorTime=`@${comment.author}   - ${" ".repeat(3)}  ${timeElapsed}`

    const handleDelete=(e)=>{
        e.preventDefault();
        setDeleteClick(true);

        deleteComment(comment.comment_id)
        .then((res)=>{
            setSuccessDelete(true);
        })
        .catch(error=>{
            setError(true)
        })

    }

    const updateCommentLikes=(votes)=>{
        updateCommentVotes(comment.comment_id,votes)
    }

    console.log("User ",user)


return(
    <article className="CommentCard">
       {(!successDelete&&!deleteClick&&!error)?        
       <article className="commentContent">
            <p className="commentAuthorTime">{authorTime}</p>
            <p>{comment.body}</p>
            <Voter type={"Votes"} votes={comment.votes} update={updateCommentLikes}/>
            
            
            {user&&
                (user.username===comment.author)?<button disabled={deleteClick}  onClick={handleDelete}>Delete Comment</button>:null}
        </article>:
        (successDelete&&deleteClick&&!error)?
        <p>Comment Deleted</p>:
        (!successDelete&&deleteClick&&!error)?
        <p>Delete Pending</p>:
        <p>Delete Unsucessful</p>}
       
       


    </article>
)
}

export default CommentCard;