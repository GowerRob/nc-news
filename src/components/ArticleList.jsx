import ArticleCard from './ArticleCard'
import {useEffect, useState} from 'react'
import {getArticles} from '../apis/api'

const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        getArticles().then((articles)=>{
            setArticles(articles)
            setIsLoading(false);
        })

       

    },[])


    return (
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
    )


}

export default ArticleList;