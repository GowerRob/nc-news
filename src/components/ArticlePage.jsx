import React, { useState, useEffect } from 'react'
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