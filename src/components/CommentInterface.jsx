import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {getCommentsById} from '../apis/api'
import CommentCard from "./CommentCard";
import NewComment from "./NewComment"
import LoadingBar from './LoadingBar';
import OrderSordCompComments from './OrderSortCompComments'
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
            console.log(comments)
            console.log(order)

        })
    },[order, sortby])


    
    if (isLoading) return <LoadingBar/>

    return (
        <section>
            <h1>Comments</h1>
            <NewComment setComments={setComments}/>
            <OrderSordCompComments order={order} sortby={sortby} setOrder={setOrder} setSortby={setSortby} />
            { <ul className="CommentsList">
                {comments.map((comment)=>{
                    return(
                        <li key={comment.comment_id}><CommentCard comment={comment} setComments={setComments} /></li>

                    )
                })

                }
            </ul> }
              
        </section>
    )


}

export default CommentInterface;