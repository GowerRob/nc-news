import { Link } from "react-router-dom";
import React from 'react'


const TopicCard = ({topic}) => {

const slug=topic.slug;

return (
    <article className="TopicCard">
        <h1 className="topic_slug">{topic.slug}</h1>
        <p className="topic_description">{topic.description}</p>
        {/* <Link to={`/articles/topics/${slug}`} state={{from:slug}}> Go to articles</Link> */}
        <Link to={`/articles/topics/${slug}`}> Go to articles</Link>
    </article>
)

}

export default TopicCard;