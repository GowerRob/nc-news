import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {getArticleById, updateArticleVotes} from '../apis/api'
import '../App.css'
import Voter from './Voter'


const ArticleInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});
    const navigate=useNavigate();

    useEffect(()=>{
        getArticleById(article_id)
        .then((article)=>{
            setArticle(article);
            setIsLoading(false);
        })
        .catch((error)=>{
            navigate('/noarticle')
        })


    },[])

    const updateArticleLikes = (value)=>{
        updateArticleVotes(article_id,value).catch(()=>{
        })
        
    }


    if(isLoading){return <p>Loading, please wait</p>}
    return (
        <section  className="ArticleInterface">
            <img className="article_img" src="https://source.unsplash.com/a-woman-sitting-on-a-couch-using-a-laptop-computer-VCQw618ZorY"></img>
            <section className="articleWrapper">
            <p className="articleTopic">{article.topic}</p>
            <p className="articleAuthor">{article.author}</p>
            <p className="articleTimeDate">{article.created_at}</p>
            <p className="articleBody">{article.body}</p>
            <p className="articleTitle">{article.title}</p>
            <Voter type={"Votes"} votes={article.votes} update={updateArticleLikes}/>
            
            <button>Delete Article</button>
            </section>

        </section>
    )


}

export default ArticleInterface;