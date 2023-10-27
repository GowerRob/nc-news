import { Link } from "react-router-dom";
import React from 'react'


const TopicCard = ({topic}) => {

const slug=topic.slug;

const imgObj={
    coding:"https://source.unsplash.com/monitor-showing-java-programming-OqtafYT5kTw",
    football:"https://source.unsplash.com/white-and-blue-soccer-ball-on-green-grass-field-during-daytime-lBhhnhndpE0",
    cups:"https://source.unsplash.com/assorted-color-ceramic-mug-lot-on-shelf-ITLqvcYcDoE",
    cooking:"https://source.unsplash.com/person-slicing-green-vegetable-in-front-of-round-ceramic-plates-with-assorted-sliced-vegetables-during-daytime-EzH46XCDQRY",
    default:"https://source.unsplash.com/a-cup-of-coffee-and-a-pair-of-glasses-on-a-newspaper-Wh9ZC4727e4"
}

const imgUrl=(imgObj[slug]===undefined)?'this':imgObj[slug];

return (
    <article className="TopicCard">
        <h1 className="topic_slug">{topic.slug}</h1>
        <img className="topic_img_card" src={imgUrl}></img>
        <p className="topic_description">{topic.description}</p>
        {/* <Link to={`/articles/topics/${slug}`} state={{from:slug}}> Go to articles</Link> */}
        <Link to={`/articles/topics/${slug}`}> Go to articles</Link>
    </article>
)

}

export default TopicCard;