import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const ArticleInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});

    useEffect(()=>{
        fetch(`https://newsservicerg.onrender.com/api/articles/${article_id}`)
        .then((response) => response.json())
        .then((response) => {
            setArticle(response.article);
            setIsLoading(false);
        });

    },[])





    return (
        <div>
            <h1>Article Interface</h1>
            <p>{article.title}</p>
        </div>
    )


}

export default ArticleInterface;