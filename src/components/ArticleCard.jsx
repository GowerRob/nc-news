import { Link } from "react-router-dom";
import React from 'react'

const ArticleCard = ({article})=>{

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    console.log(article.id)


    return (
        <div className="ArticleCard">
            <div className="card_body">
                <h2 className="card_title">{article.title}</h2>
                <h3 className="card_topic">{article.topic}</h3>
                <h3 className="card_votes">{article.votes}</h3>
                <h3 >{article.article_id}</h3>
                 <a href={`http://localhost:5173/article/${article.article_id}`}>Go to article</a>
                
                
        
                
                
                </div> 
              
        </div>
    )


}

export default ArticleCard;