import React, { useState, useEffect } from 'react'
import TopicCard from './TopicCard'
import {getTopics} from '../apis/api'
import LoadingBar from './LoadingBar';

const TopicList = ()=>{

const [topics,setTopics]=useState([])
const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        getTopics().then((topics)=>{
            setTopics(topics)
            setIsLoading(false);
        })

       

    },[])

    if (isLoading) return <LoadingBar />


    return (
        <>
            <h1>Topics</h1>
            <ul className="TopicList">
                {topics.map((topic)=>{
                    return(
                    <li key={topic.slug}>
                            <TopicCard topic={topic}/>
                    </li>
                    )
                })
                } 

            </ul>

        </>
    )


}

export default TopicList;