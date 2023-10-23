import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";


const ArticlePage = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});

    useEffect(()=>{

        fetch(`https://newsservicerg.onrender.com/api/articles/${article_id}`)
        .then((response) => response.json())
        .then((response) => {
            setArticle(response.article);
            setIsLoading(false);
            console.log("Article :",article)
      });
    },[])

    return (
        <div>
            <h1>Art Page !!! {article_id}</h1>
            <h1>{article.title}</h1>
            <h1>{article.author}</h1>
                
                

              
        </div>
    )


}

export default ArticlePage;