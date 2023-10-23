import ArticleCard from './ArticleCard'
import axios from 'axios';
import {useEffect, useState} from 'react'

const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        // axios
        // .get('https://newsservicerg.onrender.com/api/articles')
        // .then((response)=>{
        //     setArticles(response.data.articles)
        //     }
        // )
        fetch('https://newsservicerg.onrender.com/api/articles')
        .then((response) => response.json())
        .then((response) => {
        setArticles(response.articles);
        setIsLoading(false);
      });
    },[])


    return (
        <div className="ArticleList">       
            {articles.map((article)=>{
                return(
                   <div key={article.article_id}>
                        <ArticleCard article={article}/>

                   </div>
                )
            })}
            <button>Add Article</button>
        </div>
    )


}

export default ArticleList;