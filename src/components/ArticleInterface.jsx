import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {getArticleById, updateArticleVotes} from '../apis/api'
import '../App.css'
import Voter from './Voter'


const ArticleInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});

    useEffect(()=>{
        getArticleById(article_id)
        .then((article)=>{
            setArticle(article);
            setIsLoading(false);
        })

    },[])

    const updateArticleLikes = (value)=>{
        updateArticleVotes(article_id,value).catch(()=>{
            console.log("An error occured")
        })
        
        
    }


    if(isLoading){return <p>Loading, please wait</p>}
    return (
        <section  className="ArticleInterface">
            <h1>Article Interface</h1>
            <p>{article.title}</p>
            <p>{article.article_id}</p>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{article.body}</p>
            <Voter type={"Votes"} votes={article.votes} update={updateArticleLikes}/>
            <button>Delete Article</button>
        </section>
    )


}

export default ArticleInterface;