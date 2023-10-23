import ArticleCard from './ArticleCard'
import axios from 'axios';
import {useEffect, useState} from 'react'

const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        axios.get(`https://newsservicerg.onrender.com/api/articles`)
        .then((response)=>{
            setArticles(response.data.articles);
            setIsLoading(false);
            console.log("Article :",articles);
        })

    },[])


    return (
        <section className="ArticleList">       
            {articles.map((article)=>{
                return(
                   <div key={article.article_id}>
                        <ArticleCard article={article}/>
                   </div>
                )
            })}
            <button>Add Article</button>
        </section>
    )


}

export default ArticleList;