import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ArticleInterface from "./ArticleInterface";
import CommentInterface from "./CommentInterface";


const ArticlePage = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});

    useEffect(()=>{


    },[])

    return (
        <div>
            <ArticleInterface />
            <CommentInterface />
                
                

              
        </div>
    )


}

export default ArticlePage;