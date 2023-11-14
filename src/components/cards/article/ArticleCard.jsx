import React from 'react';
import { useNavigate } from "react-router-dom";
import './articleCard.css';
import typewriter from '../../../assets/typewriter.jpg'
import moment from 'moment';


const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  console.log(article)
return(
  <div onClick={()=>{navigate(`/articles/${article.article_id}`)}}>
  <div className='npp__article-container'>
  <div className='npp__article-container-image'>
    <img src={typewriter} alt="typerwriter"/>
  </div>
  <div className='npp__article-container-content'>
      <p>{article.topic.toUpperCase()}</p>
      <p>{moment(article.created_at,moment.ISO_8601).format('LLLL')}</p>
        <h3 >{article.title.toLowerCase()}</h3> 
      <p>Read Full Article</p>
  </div>
</div>
</div>

)};

export default ArticleCard;

