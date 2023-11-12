import {useEffect, useState,useContext} from 'react'
import {useSearchParams } from 'react-router-dom'
import { SearchContext } from '../../contexts/SearchContext';
 import './search.css'
import {getArticles} from "../../apis/api";
import ArticleCard from '../cards/article/ArticleCard';


const Search = () => {
    const {search}=useContext(SearchContext);
    const [searchParams]=useSearchParams();
    const [articles,setArticles]=useState(0);
    const [isLoading, setIsLoading] = useState(true);
   

    useEffect(()=>{
        getArticles(searchParams)
        .then((res)=>{
          
          const foundArticles=[];
          const pattern=new RegExp(search,"i");
          console.log(pattern)
          res.forEach((article)=>{
              console.log(article)
              if(pattern.test(article.title)){
                foundArticles.push(article)
              }
          })
          console.log(foundArticles);
          setArticles(foundArticles);
          setIsLoading(false);
        })
    },[])



  return (
    <div >
        {!isLoading&&
        <div className='gpt3__features-container'>
            {articles.map((article)=>{ 
            return <ArticleCard article={article} key={article.article_id}/>})
            }
      </div>}


    </div>
  )
}

export default Search