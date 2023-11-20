import dateFormat, { masks } from "dateformat";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment ,updateCommentVotes} from "../../apis/api";
import secondsToTime from '../../utils/secondsToTime'
import Voter from '../Voter'
import './articlehome.css'

const CommentCard = ({comment,setComments})=>{
    const {user}=useContext(UserContext);
    const [successDelete, setSuccessDelete]=useState(false)
    const [deleteClick,setDeleteClick]=useState(false);
    const [error, setError]=useState(false);

    const imgObj={
        tickle122:"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
grumpy19:"https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
happyamy2016:"https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
cooljmessy:"https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
weegembump:"https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
jessjelly:"https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"     
    }

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


return(
    <article className="CommentCard">
      <div><img className="CommentAvatar" src={imgObj[comment.author]}></img></div>
      <div>
                {(!successDelete&&!deleteClick&&!error)?        
        <article className="commentContent">
                <p className="commentAuthorTime">{authorTime}</p>
                <p className="commentBody">{comment.body}</p>
                <Voter type={"Votes"} votes={comment.votes} update={updateCommentLikes}/>
                
                
                {user&&
                    (user.username===comment.author)?<button disabled={deleteClick}  onClick={handleDelete}>Delete Comment</button>:null}
            </article>:
            (successDelete&&deleteClick&&!error)?
            <p>Comment Deleted</p>:
            (!successDelete&&deleteClick&&!error)?
            <p>Delete Pending</p>:
            <p>Delete Unsucessful</p>}
     </div>  

       
       


    </article>
)
}

export default CommentCard;