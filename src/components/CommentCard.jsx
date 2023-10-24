

const CommentCard = ({comment})=>{
return(
    <article className="CommentCard">
        <ul>
            <li>{comment.body}</li>
            <li>{comment.votes}</li>
            <li>{comment.created_at}</li>
            <li>{comment.author}</li>
            <button>Upvote Comment</button>
            <button>Downvote Comment</button>
            <button>Delete Comment</button>
        </ul>

    </article>
)
}

export default CommentCard;