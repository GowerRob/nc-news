import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {getArticleById, updateArticleVotes} from '../apis/api'
import '../App.css'
import Voter from './Voter'
import LoadingBar from './LoadingBar';
import secondsToTime from '../utils/secondsToTime'

const ArticleInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});
    const navigate=useNavigate();
  

    const timeElapsed=(secondsToTime((Date.now()-(new Date(article.created_at).getTime()))/1000));
    const authorTime=`@${article.author}   - ${" ".repeat(3)}  ${timeElapsed}`

    useEffect(()=>{
        getArticleById(article_id)
        .then((article)=>{
            setArticle(article);
            setIsLoading(false);
        })
        .catch((error)=>{
            navigate('/noarticle')
        })
    },[])

    const updateArticleLikes = (value)=>{
        updateArticleVotes(article_id,value).catch(()=>{
        })
        
    }


    if(isLoading){return <LoadingBar/> }
    return (
        <section  className="ArticleInterface">
            <div><img className="article_img" src="https://source.unsplash.com/a-woman-sitting-on-a-couch-using-a-laptop-computer-VCQw618ZorY"></img></div>
            <section className="articleContent">
            <p className="articleTopic">{article.topic}</p>
            <p className="articleAuthorTime">{authorTime}</p>

            <p className="articleBody">{article.body}</p>
            <p className="articleTitle">{article.title}</p>
            <Voter className="articleVotes" type={"Votes"} votes={article.votes} update={updateArticleLikes}/>
            
            {/* <button>Delete Article</button> */}
            </section>

        </section>
    )


}

export default ArticleInterface;