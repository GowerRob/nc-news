import { useState } from "react";

import {  postTopic } from "../../apis/api";

import './topics.css'


const NewArticle= ({toggleModal}) => {
    const [failedPost,setFailedPost]=useState(false);
    const [successfulPost,setSuccessfulPost]=useState(false);

    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')


    const handleSubmit=(e)=>{

        e.preventDefault();
        setFailedPost(false)
        const topicPost={
            slug:title,
            description:description,

        }

        postTopic(topicPost)
        .then((res)=>{
            setSuccessfulPost(true);
            const timer =  setTimeout(() => {
                setSuccessfulPost(false);
                toggleModal();
            }, 2000)
            return () => clearTimeout(timer);

        })
        .catch((error)=>{
            setFailedPost(true)
        })
    }





    return (
        <>
        <form className="newTopicForm" onSubmit={handleSubmit}>
            <label htmlFor="topicTitle"  className="newTopicLabel">
                    Enter Topic Title: 
            </label>   
            <input 
            id="topicTitle"
            type="text"
            value={title}
            onChange={e=>setTitle(e.target.value)} >
            </input>

            <label htmlFor="articleTitle"  className="newTopicLabel">
                    Enter Topic Description: 
            </label>   
            <input 
            id="topicDescription"
            type="text"
            value={description}
            onChange={e=>setDescription(e.target.value)} >
            </input>

            <div className="buttonContainer">
            <button type='submit' className="signInButtons">Submit</button>
            <button onClick={toggleModal} className="cancelButtons">Cancel</button>
           
            </div>
            
            {failedPost&&<p>Failed to post Topic, please check all fields are correctly filled in</p>}
            {successfulPost&&<p>Topic posted successfully</p>}



        </form>
        
        
        
        </>

       
    )
}

export default NewArticle