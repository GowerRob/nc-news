import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {getCommentsById} from '../apis/api'
import CommentCard from "./CommentCard";
import NewComment from "./NewComment"

const CommentInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments]=useState({});

    useEffect(()=>{
        getCommentsById(article_id)
        .then((comments)=>{
            setComments(comments);
            setIsLoading(false);

        })
    },[])


    
    if (isLoading) return <p>Loading, please wait</p>

    return (
        <section>
            <h1>Comments</h1>
            <NewComment setComments={setComments}/>
            { <ul className="CommentsList">
                {comments.map((comment)=>{
                    return(
                        <li key={comment.comment_id}><CommentCard comment={comment} /></li>

                    )
                })

                }
            </ul> }
              
        </section>
    )


}

export default CommentInterface;