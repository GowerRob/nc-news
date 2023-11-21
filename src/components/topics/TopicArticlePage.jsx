
import {getArticles} from '../../apis/api'
import {useEffect, useState} from 'react'
import ArticleCard from '../articles/ArticleCard2'
import { useNavigate, useParams,useSearchParams  } from "react-router-dom";
import OrderSortComp from '../OrderSortComp'

const TopicArticlePage = ()=>{
    const {topic} = useParams() ;

    const [isLoading, setIsLoading] = useState(true);
    const [filteredArticles,setFilteredArticles]=useState([]);
    const [searchParams, setSearchParams]=useSearchParams();
    const navigate=useNavigate()

    const [order, setOrder]=useState('desc');
    const [sortby, setSortby]=useState('created_at')


    useEffect(()=>{
        getArticles(searchParams)
        .then((articles)=>{
            console.log("Yep")
            const filtered=articles.filter((article)=>{
              return article.topic===topic
            })
            if(filtered.length===0){
                navigate('/notopic')
            }
            setFilteredArticles(filtered);
            setIsLoading(false);
        })
    },[order, sortby])


    if (isLoading) return <p>Loading articles, please wait</p>


    return (  
    <>   
    <ul>
        <OrderSortComp order={order} sortby={sortby} setOrder={setOrder} setSortby={setSortby} setSearchParams={setSearchParams}/>
    </ul>    
    <ul className="TopicList">       
        {filteredArticles.map((article)=>{
            return(
            <li key={article.article_id}>
                    <ArticleCard article={article}/>
            </li>
            )
        })}
    <button>Add Article</button>
    </ul>
    </>   
)

}

export default TopicArticlePage