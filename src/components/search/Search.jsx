import {useEffect, useState,useContext} from 'react'
import {useSearchParams } from 'react-router-dom'
import { SearchContext } from '../../contexts/SearchContext';
 import './search.css'
import {getArticles} from "../../apis/api";
import ArticleCard from '../cards/article/ArticleCard';
import LoadingBar from '../loading/LoadingBar'
import SearchBar from './SearchBar';

const Search = () => {
  
    const {search}=useContext(SearchContext);
    const [searchParams]=useSearchParams();
    const [articles,setArticles]=useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [searchNew,setSearchNew]=useState('');
    const [allArticles, setAllArticles]=useState([])

    useEffect(()=>{
        getArticles(searchParams)
        .then((res)=>{
          setAllArticles(res);
          const foundArticles=[];
          const pattern=new RegExp(search,"i");
          res.forEach((article)=>{
              if(pattern.test(article.title)){
                foundArticles.push(article)
              }
          })
          setArticles(foundArticles);
          setIsLoading(false);
        })
    },[])

    const handleSearch=()=>{
     const foundArticles=[];
     const pattern=new RegExp(searchNew,"i");
     allArticles.forEach((article)=>{
         if(pattern.test(article.title)){
           foundArticles.push(article)
         }
     })
     setArticles(foundArticles);
     setIsLoading(false);
      
    }

  return (
    <div >
        <div className='npp__header-content__input'>
           <SearchBar setNewSearch={setSearchNew} handleSearch={handleSearch}/>
        </div>
        {isLoading&&<LoadingBar/>}
        {(articles.length===0)&&(!searchNew.length===0)&&<h2>Sorry, we have not found any articles for you. Try a different search term</h2>}
        {!isLoading&&
        <div className='npp__article-list-container'>
            {articles.map((article)=>{ 
            return <ArticleCard article={article} key={article.article_id}/>})
            }
      </div>}
    


    </div>
  )
}

export default Search