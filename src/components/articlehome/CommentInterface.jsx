import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {getCommentsById} from '../../apis/api'
import CommentCard from "./CommentCard";
import NewComment from "./NewComment"
import LoadingBar from '../loading/LoadingBar';
import OrderSordCompComments from '../OrderSortCompComments'
import {useSearchParams } from 'react-router-dom'

const CommentInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments]=useState({});
    const [order, setOrder]=useState('desc');
    const [sortby, setSortby]=useState('created_at')


    useEffect(()=>{
        getCommentsById(article_id)
        .then((comments)=>{
            setComments(comments);
            setIsLoading(false);
        })
    },[order, sortby])


    
    if (isLoading) return <LoadingBar/>

    return (
        <div className="commentInterfaceContainer">
            <NewComment setComments={setComments}/>
           {comments.length!==0 && <OrderSordCompComments order={order} sortby={sortby} setOrder={setOrder} setSortby={setSortby} />}
            { <ul className="CommentsList">
                {comments.map((comment)=>{
                    return(
                        <li key={comment.comment_id}><CommentCard comment={comment} setComments={setComments} /></li>

                    )
                })

                }
            </ul> }
              
        </div>
    )


}

export default CommentInterface;