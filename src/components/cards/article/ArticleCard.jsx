import React from 'react';
import './articleCard.css';

const ArticleCard = ({ article }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{article.title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{article.article_id}</p>
    </div>
  </div>
);

export default ArticleCard;