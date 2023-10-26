import ArticleCard from './ArticleCard'
import {useEffect, useState} from 'react'
import {getArticles} from '../apis/api'
import { useNavigate,useSearchParams } from 'react-router-dom'
import OrderSortComp from './OrderSortComp'

const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder]=useState('desc');
    const [sortby, setSortby]=useState('created_at')

    const [selectedOrder,setSelectedOrder] = useState('asc')

    const [searchParams, setSearchParams]=useSearchParams();


    useEffect(()=>{
        console.log(searchParams)
        getArticles(searchParams).then((articles)=>{
            setArticles(articles)
            setIsLoading(false);
        })

    },[order, sortby])



    if (isLoading) return <p>Loading articles, please wait</p>

    return (
        <>
        <ul>
            <button onClick={()=>{
                setOrder('asc')
                setSearchParams({order:'asc',sort_by:sortby})
                
            }}>Asc</button>


            <button onClick={()=>{
                setOrder('desc')
                setSearchParams({order:'desc',sort_by:sortby})

                }}>Desc</button>

            <button onClick={()=>{
                setSortby('created_at')
                setSearchParams({order:order, sort_by:'created_at'})

                }}>Date</button>

            <button onClick={()=>{
                setSortby('votes')
                setSearchParams({order:order,sort_by:'votes'})

                }}>Votes</button>

            <button onClick={()=>{
                setSortby('comment_count')
                setSearchParams({order:order,sort_by:'comment_count'})

                }}>Comments</button>
            <select 
                value={order}
                onChange={e=>{
                    setOrder(e.target.value)
                    setSearchParams({order:e.target.value,sort_by:sortby})
                    
                    }}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
             </select>
            
             <select 
                value={order}
                onChange={e=>{
                    setSortby(e.target.value)
                    setSearchParams({order:order,sort_by:e.target.value})
                    
                    }}>
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comments_count">comments</option>
             </select>


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