import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import { getUsers, getTopics, postArticle } from "../../apis/api";
//import { loadConfigFromFile } from "vite";
import './articles2.css'
import Select from 'react-select'

const NewArticle= ({toggleModal}) => {
    const {user,setUser}=useContext(UserContext);
    const [loggedIn,setLoggedIn]=useState(false);
    const [failedPost,setFailedPost]=useState(false);
    const [successfulPost,setSuccessfulPost]=useState(false);
    const [selectOptions, setSelectOptions]=useState([]);
    const [title, setTitle]=useState('')
    const [text, setText]=useState('')
    const [topic, setTopic]=useState('')

    const handleSubmit=(e)=>{

        e.preventDefault();
        setFailedPost(false)
        const articlePost={
            author:user.username,
            title:title,
            body:text,
            topic:topic.value,
            article_img_url:"https://my_custom_image_url.com/1.jpeg"

        }

        console.log(articlePost)

        postArticle(articlePost)
        .then((res)=>{
            setSuccessfulPost(true);
            const timer =  setTimeout(() => {
                setSuccessfulPost(false);
                toggleModal();
            }, 2000)
            return () => clearTimeout(timer);

        })
        .catch((error)=>{
            console.log(error)
            setFailedPost(true)
        })
    }

    useEffect(()=>{

        getTopics()
        .then((res)=>{
            const topicsArray=[]
            res.forEach(topic=>{
                const tempObj={}
                tempObj.value=topic.slug;
                tempObj.label=topic.slug[0].toUpperCase()+topic.slug.substring(1);
                topicsArray.push(tempObj)
            })
            console.log(topicsArray)
            setSelectOptions(topicsArray);

        })

    
        if(user!==null){setLoggedIn(true)}
        },
        
        [loggedIn,failedPost,user])

        const handleChange = (selectedOption) => {
            setTopic(selectedOption);
            console.log(`Option selected:`, selectedOption);
          };



    return (
        <>  {!loggedIn&&
                <div className="notLoggedIn">
                <p>Please sign in to post an article</p>
                
                <button onClick={toggleModal}>Close</button>
                </div>
        }
            {loggedIn&&
            <div>
                <h3>Add a new Article</h3>
                <form className="newArticleForm" onSubmit={handleSubmit}>
                <p>You are logged in as: {user.username}</p>
                
                <label htmlFor="articleTitle"  className="newArtLabel">
                    Enter Article Title: 

                </label>
                
                    <input 
                    id="articleTitle"
                    type="text"
                    value={title}
                    onChange={e=>setTitle(e.target.value)} >
                    </input>


                <label htmlFor="ArticleText" className="newArtLabel">
                    Enter Article Text: 

                </label>                    
                <textarea 
                    id="ArticleText"
                    type="text"
                    value={text}
                    onChange={e=>setText(e.target.value)} 
                    >
                    </textarea>

                <label htmlFor="TopicSelect" className="newArtLabel">
                    Select Topic: 
                    <Select options={selectOptions}
                    onChange={handleChange}
                    />

                </label>




                <button type='submit' className="signInButtons">Submit</button>
                <button onClick={toggleModal} className="cancelButtons">Cancel</button>
                {failedPost&&<p>Failed to Post Article, please check all fields are correctly filled in</p>}
                {successfulPost&&<p>Article Posted successfully</p>}
            </form>
            </div>
}

        </>
       
    )
}

export default NewArticle