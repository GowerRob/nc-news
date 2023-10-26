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
        console.log("I'll try to delete that")
        console.log(comment)

        // setComments((currentComments)=>{
        //     const copyComments=[...currentComments];
        //     const deleteIndex=copyComments.findIndex((element)=>{
        //         return element.comment_id===comment.comment_id;
        //     })

        //     copyComments.splice(deleteIndex,1);

        //     console.log(copyComments)
        //     return copyComments;
        // })

        deleteComment(comment.comment_id)
        .then((res)=>{
            console.log("All good",res)
            setSuccessDelete(true);
        })
        .catch(error=>{
            console.log("There was an error", error)
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