import { Link } from "react-router-dom";
import React from 'react'
import './topics.css'
import { useNavigate } from "react-router-dom";


const TopicCard = ({topic}) => {
    const navigate = useNavigate();
const slug=topic.slug;

const imgObj={
    coding:"https://source.unsplash.com/monitor-showing-java-programming-OqtafYT5kTw",
    football:"https://source.unsplash.com/white-and-blue-soccer-ball-on-green-grass-field-during-daytime-lBhhnhndpE0",
    cups:"https://source.unsplash.com/assorted-color-ceramic-mug-lot-on-shelf-ITLqvcYcDoE",
    cooking:"https://source.unsplash.com/person-slicing-green-vegetable-in-front-of-round-ceramic-plates-with-assorted-sliced-vegetables-during-daytime-EzH46XCDQRY",
    default:"https://source.unsplash.com/a-cup-of-coffee-and-a-pair-of-glasses-on-a-newspaper-Wh9ZC4727e4"
}

const imgUrl=(imgObj[slug]===undefined)?imgObj.default:imgObj[slug];

return (
    <div onClick={()=>{navigate(`/articles/topics/${slug}`)}}>
    <article className="TopicCardA">
        <h1 className="topic_slugA">{topic.slug}</h1>
        <img className="topic_img_card" src={imgUrl}></img>
        <p className="topic_description">{topic.description}</p>
    </article>
    </div>
)

}

export default TopicCard;