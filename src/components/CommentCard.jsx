import dateFormat, { masks } from "dateformat";

const CommentCard = ({comment})=>{
return(
    <article className="CommentCard">
        <ul>
            <li>{comment.body}</li>
            <li>{comment.votes}</li>
            <li>{dateFormat(comment.created_at,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</li>
            <li>{comment.author}</li>
            <button>Upvote Comment</button>
            <button>Downvote Comment</button>
            <button>Delete Comment</button>
        </ul>

    </article>
)
}

export default CommentCard;