import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import {getTopics} from '../apis/api'


const TopicPage = ()=>{

const [topics,setTopics]=useState([])
const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        getTopics().then((topics)=>{
            setTopics(topics)
            setIsLoading(false);
        })

       

    },[])

    if (isLoading) return <p>Loading topics, please wait</p>


    return (
        <div>
            <h1>Topics</h1>
            {topics.map((topic)=>{
                return(
                   <li key={topic.slug}>
                        <h1>{topic.slug}</h1>
                   </li>
                )
            })} 
        </div>
    )


}

export default TopicPage;