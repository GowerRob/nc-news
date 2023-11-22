import { useState , useContext,useEffect} from "react";
import { useParams } from "react-router-dom";
import './articlehome.css'
import {postNewComment} from '../../apis/api'
import { UserContext } from "../../contexts/UserContext"

const NewComment = ({comments,setComments})=>{
    const {article_id} = useParams();
    const [username, setUsername]=useState("")
    const [newComment, setNewComment]=useState("")
    const [postData, setPostData]=useState({})
    const [displayToggle,setDisplayToggle]=useState(false)
    const [processingPost,setProcessingPost]=useState(false)
    const [postSuccess,setPostSuccess]=useState(false)
    const [postFail,setPostFail]=useState(false)
    const [optimisticCount, setOptimisticCount]=useState(-1)
    const {user}=useContext(UserContext);
    const [loggedIn, setLoggedIn]=useState(false)

    useEffect(()=>{
        if(user!==null){
            setLoggedIn(true)
            setUsername(user.username)
        }

    },[user,loggedIn])


    const handleToggle = (e)=>{
        if(user===null){
            setLoggedIn(false)
        }else{
        e.preventDefault();
        setPostSuccess(false)
        setPostFail(false)
        setDisplayToggle(!displayToggle)
        setNewComment("")  
        }

    }

    const handleSumbit =(e)=>{

        if(user===null){
            setLoggedIn(false)
        }else{
            e.preventDefault();
        
            const postableComment={
                body:newComment,
                username:username
            }
            setProcessingPost(true);
            setDisplayToggle(false);
    
            const timeStamp=moment().format('YYYY-MM-DDTHH:mm:ss');
    
            const optimisticCommentObj={
                comment_id:optimisticCount,
                body:newComment,
                author:username,
                article_id:article_id,
                votes:0,
                created_at:timeStamp
    
            }
    
            setOptimisticCount((currentCount)=>{
                return currentCount-1
            })
    
            setComments((currentComments)=>{
                const copyCurrent=[...currentComments]
                copyCurrent.unshift(optimisticCommentObj)
                console.log(copyCurrent);
                return copyCurrent
            })
    
    
            postNewComment(article_id,postableComment)
            .then((response)=>{
                console.log("Response",response)
                setProcessingPost(false)
                setPostData(response)
                console.log("PostData",postData)
                setPostSuccess(true)
    
            }).catch((res)=>
            {   console.log("In catch",res)
                setPostFail(true)
            })
     
        }
        
  
    }
  
    
    return (
        <div className="newCommentContainer">
            { loggedIn?<>             
            <button onClick={handleToggle} className="newCommentButton">Comment</button>
            <div>
                {displayToggle && <form className="newCommentForm" onSubmit={handleSumbit}>
                    {/* <label htmlFor="username">Username</label>
                    <input  
                    id="username"
                    value={username}
                    required
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }} /> */}

                  
                    <input  
                    id="newComment"
                    type="text"
                    value={newComment}
                    required
                    onChange={(e)=>{
                        setNewComment(e.target.value)
                    }} />

                    <button type="submit" className="newCommentButton">Post</button>
                    </form>} 
                {postSuccess&& <p className="whiteText">Post Successful</p>}
                {postFail&& <p className="whiteText">Post Failed</p>}
            </div></>:<p className="whiteText">Please sign in to post comments</p>}

        </div>
    )


}

export default NewComment;            