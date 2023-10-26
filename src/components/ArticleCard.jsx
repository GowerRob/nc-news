import { Link } from "react-router-dom";
import React from 'react'
import moment from 'moment';

const ArticleCard = ({article})=>{




    return (
        <article className="ArticleCard">
            <p className="card_topic">{article.topic}</p>
            <img className="article_img_card" src="https://source.unsplash.com/a-cup-of-coffee-and-a-pair-of-glasses-on-a-newspaper-Wh9ZC4727e4"></img>
            <div className="card_body">
                <h2 className="card_title">{article.title}</h2>
                <p className="card_date">{moment(article.created_at, moment.ISO_8601).format('LLLL')}</p>
                <p className="card_comments">{article.comment_count}</p>
                <p className="card_votes">{article.votes}</p>
                 <Link to={`/articles/${article.article_id}`}> Go to article</Link>  
            </div>   
        </article>
    )


}

export default ArticleCard;