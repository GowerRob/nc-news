import { Link } from "react-router-dom";
import React from 'react'
import moment from 'moment';
import './articles2.css';
import { useNavigate } from "react-router-dom";

const ArticleCard = ({article})=>{
    const navigate = useNavigate();
   
    const imgObj={
        coding:"https://source.unsplash.com/monitor-showing-java-programming-OqtafYT5kTw",
        football:"https://source.unsplash.com/white-and-blue-soccer-ball-on-green-grass-field-during-daytime-lBhhnhndpE0",
        cups:"https://source.unsplash.com/assorted-color-ceramic-mug-lot-on-shelf-ITLqvcYcDoE",
        cooking:"https://source.unsplash.com/person-slicing-green-vegetable-in-front-of-round-ceramic-plates-with-assorted-sliced-vegetables-during-daytime-EzH46XCDQRY",
        default:"https://source.unsplash.com/a-cup-of-coffee-and-a-pair-of-glasses-on-a-newspaper-Wh9ZC4727e4"
    }

    const imgUrl=(imgObj[article.topic]===undefined)?'this':imgObj[article.topic];

    


    return (
        <div onClick={()=>{navigate(`/articles/${article.article_id}`)}}>
            <article className='npp__article-container-content'>
                <p className="card_topic">{article.topic}</p>
                <img className="article_img_card" src={imgUrl}></img>
                <div className="card_body">
                    <h2 className="card_title">{article.title}</h2>
                    <p className="card_date">{moment(article.created_at, moment.ISO_8601).format('LLLL')}</p>
                    <p className="card_comments">{article.comment_count}</p>
                    <p className="card_votes">{article.votes}</p>
                     
                </div>   
            </article>
        </div>
    )


}

export default ArticleCard;