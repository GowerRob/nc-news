import ArticleCard from './ArticleCard'
import {useEffect, useState} from 'react'
import {getArticles} from '../apis/api'
import {useSearchParams } from 'react-router-dom'
import OrderSortComp from './OrderSortComp'
import LoadingBar from './LoadingBar';
import AddArticleModal from './AddArticleModal'


const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder]=useState('desc');
    const [sortby, setSortby]=useState('created_at')
    const [modal, setModal]=useState(false);

    const [searchParams, setSearchParams]=useSearchParams();


    useEffect(()=>{
        getArticles(searchParams).then((articles)=>{
            setArticles(articles)
            setIsLoading(false);
        })

    },[order, sortby,searchParams])

    const toggleModal=()=>{
        setModal(!modal)
    }


    if (isLoading) return <LoadingBar/>

    return (
        <>
        <button
        onClick={toggleModal}>Add Article</button>
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
            
        </ul>
        {/* <AddArticleModal visible={modal} toggleModal={toggleModal}/> */}


        </>
    )


}

export default ArticleList;