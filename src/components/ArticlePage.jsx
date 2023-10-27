import React, { useState, useEffect } from 'react'
import ArticleInterface from "./ArticleInterface";
import CommentInterface from "./CommentInterface";


const ArticlePage = ()=>{

    return (
        <section className="ArticleCompContainer">
            <ArticleInterface />
            <CommentInterface />
                        
        </section>
    )


}

export default ArticlePage;