
import {getArticles} from '../apis/api'
import {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'
import { useNavigate, useParams,useSearchParams  } from "react-router-dom";

const TopicArticlePage = ()=>{
    const {topic} = useParams() ;

    const [isLoading, setIsLoading] = useState(true);
    const [filteredArticles,setFilteredArticles]=useState([]);
    const [searchParams, setSearchParams]=useSearchParams({order:'asc',sort_by:'votes'});
    const navigate=useNavigate()

    useEffect(()=>{
        getArticles(searchParams)
        .then((articles)=>{
            const filtered=articles.filter((article)=>{
              return article.topic===topic
            })
            if(filtered.length===0){
                navigate('/notopic')
            }
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