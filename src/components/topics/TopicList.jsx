import React, { useState, useEffect } from 'react'
import TopicCard from './TopicCard'
import {getTopics} from '../../apis/api'
import LoadingBar from '../loading/LoadingBar'
import NewTopic from './NewTopic'

const TopicList = ()=>{

const [topics,setTopics]=useState([])
const [isLoading, setIsLoading] = useState(true);
const [topicModal, setTopicModal]=useState(false);

    useEffect(()=>{

        getTopics().then((topics)=>{
            setTopics(topics)
            setIsLoading(false);
        })

    },[])


    const PopUpModal = ({visible, children, toggleModal}) => {
        return (<>
                {visible && <>
                <div className='overlay'
                onClick={toggleModal}></div>
                <div className="modal-content-newTopic">{children} </div>   
                </>}
                </>
            
        );
    };


    const toggleModal=()=>{
        setTopicModal(!topicModal)
    }


    if (isLoading) return <LoadingBar />
    return (
        <>
        <PopUpModal visible={topicModal} toggleModal={toggleModal} >
                <NewTopic toggleModal={toggleModal}/>
        </PopUpModal>


            <button
                onClick={toggleModal}
                className='AddArticleButton'>Add Topic
            </button>


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