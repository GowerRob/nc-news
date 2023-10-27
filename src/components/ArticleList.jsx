import ArticleCard from './ArticleCard'
import {useEffect, useState} from 'react'
import {getArticles} from '../apis/api'
import {useSearchParams } from 'react-router-dom'
import OrderSortComp from './OrderSortComp'
import LoadingBar from './LoadingBar';

const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder]=useState('desc');
    const [sortby, setSortby]=useState('created_at')


    const [searchParams, setSearchParams]=useSearchParams();


    useEffect(()=>{
        getArticles(searchParams).then((articles)=>{
            setArticles(articles)
            setIsLoading(false);
        })

    },[order, sortby])



    if (isLoading) return <LoadingBar/>

    return (
        <>
        <ul>
            <OrderSortComp order={order} sortby={sortby} setOrder={setOrder} setSortby={setSortby} setSearchParams={setSearchParams}/>
        </ul>
        <ul className="ArticleList">       
            {articles.map((article)=>{
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

export default ArticleList;