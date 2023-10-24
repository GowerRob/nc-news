import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ArticleInterface from "./ArticleInterface";
import CommentInterface from "./CommentInterface";


const ArticlePage = ()=>{

    return (
        <div>
            <ArticleInterface />
            <CommentInterface />
                        
        </div>
    )


}

export default ArticlePage;