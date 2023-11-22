import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import {getArticleById, updateArticleVotes} from '../../apis/api'
import './articlehome.css'
import Voter from '../Voter'
import LoadingBar from '../loading/LoadingBar';
import secondsToTime from '../../utils/secondsToTime'

const imgObj={
    tickle122:"https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
grumpy19:"https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
happyamy2016:"https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
cooljmessy:"https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002",
weegembump:"https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553",
jessjelly:"https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"     
}


const ArticleInterface = ()=>{
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [article, setArticle]=useState({});
    const navigate=useNavigate();
  

    const timeElapsed=(secondsToTime((Date.now()-(new Date(article.created_at).getTime()))/1000));
    const authorTime=`@${article.author}   - ${" ".repeat(3)}  ${timeElapsed}`

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


    if(isLoading){return <LoadingBar/> }
    return (
        <section  className="ArticleInterface">
            <div><img className="article_img" src={imgObj[article.author]}></img></div>
            <section className="articleContent">
                <p className="articleTopic">{article.topic}</p>
                <p className="articleAuthorTime">{authorTime}</p>

                <p className="articleBody">{article.body}</p>
                <p className="articleTitle">{article.title}</p>
                <Voter className="articleVotes" type={"Votes"} votes={article.votes} update={updateArticleLikes}/>
            </section>

        </section>
    )


}

export default ArticleInterface;