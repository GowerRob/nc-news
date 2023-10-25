import ArticleCard from './ArticleCard'
import {useEffect, useState} from 'react'
import {getArticles} from '../apis/api'
import { useNavigate,useSearchParams } from 'react-router-dom'

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