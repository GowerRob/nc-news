import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import {getArticleById} from '../apis/api'
import '../App.css'

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


    return (
        <section  className="ArticleInterface">
            <h1>Article Interface</h1>
            <p>{article.title}</p>
            <p>{article.topic}</p>
            <p>{article.author}</p>
            <p>{article.body}</p>

            <button>Increase Vote</button>
            <button>Decrease Vote</button>
            <button>Delete Article</button>
        </section>
    )


}

export default ArticleInterface;