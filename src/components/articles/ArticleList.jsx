import ArticleCard2 from './ArticleCard2'
import {useEffect, useState} from 'react'
import {getArticles} from '../../apis/api'
import {useSearchParams } from 'react-router-dom'
import OrderSortComp from '../OrderSortComp'
import LoadingBar from '../loading/LoadingBar';

import NewArticle from './NewArticle'
import './articles2.css';

const ArticleList = ()=>{

    
    const [articles,setArticles]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder]=useState('desc');
    const [sortby, setSortby]=useState('created_at')
    const [articleModal, setArticleModal]=useState(false);

    const [searchParams, setSearchParams]=useSearchParams();


    const PopUpModal = ({visible, children, toggleModal}) => {
        return (<>
                {visible && <>
                <div className='overlay'
                onClick={toggleModal}></div>
                <div className="modal-content-newArt">{children} </div>   
                </>}
                </>
            
        );
    };
    





    useEffect(()=>{
        getArticles(searchParams).then((articles)=>{
            setArticles(articles)
            setIsLoading(false);
        })

    },[order, sortby,searchParams])

    const toggleModal=()=>{
        setArticleModal(!articleModal)
    }


    if (isLoading) return <LoadingBar/>

    return (
        <>
        <button
        onClick={toggleModal}>Add Article</button>

        <PopUpModal visible={articleModal} toggleModal={toggleModal} >
                <NewArticle toggleModal={toggleModal}/>
        </PopUpModal>


        <ul>
            <OrderSortComp order={order} sortby={sortby} setOrder={setOrder} setSortby={setSortby} setSearchParams={setSearchParams}/>
        </ul>
        <div className='npp__article-list-container'>     
            {articles.map((article)=>{
                return(
                   <div key={article.article_id}>
                        <ArticleCard2 article={article}/>
                   </div>
                )
            })}
            
            </div>
        

        </>
    )


}

export default ArticleList;