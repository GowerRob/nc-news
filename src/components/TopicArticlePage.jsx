// import {useLocation} from 'react-router-dom'
import {getArticles} from '../apis/api'
import {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'
import { useParams } from "react-router-dom";

const TopicArticlePage = ()=>{
    // const location = useLocation();
    // const {from} = location.state;
    const {topic} = useParams() ;


    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredArticles,setFilteredArticles]=useState([]);

    useEffect(()=>{
        getArticles()
        .then((articles)=>{
            setArticles(articles)
            const filtered=articles.filter((article)=>{
              return article.topic===topic
            })
            setFilteredArticles(filtered);
            setIsLoading(false);
        })
    },[])


    if (isLoading) return <p>Loading articles, please wait</p>


    return (        
    <ul className="ArticleList">       
        {filteredArticles.map((article)=>{
            return(
            <li key={article.article_id}>
                    <ArticleCard article={article}/>
            </li>
            )
        })}
    <button>Add Article</button>
    </ul>
)

}

export default TopicArticlePage