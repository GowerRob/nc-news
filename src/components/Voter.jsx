import { useState,useEffect } from "react"


const Voter = ({type, votes,update}) => {
    const [userVotes, setUserVotes]=useState(0);



    const updateVotes = (value)=>{
        setUserVotes((userVotes)=>{
            return userVotes+value;
        })
        update(value)
    }



return(
    <article>
        <p>{type} : {votes+userVotes}</p>
        <button 
        disabled={userVotes===1}
        aria-label="like" 
        onClick={()=>{updateVotes(1)}}
        >Increase Vote</button>

        <button 
        disabled={userVotes===-1}
        aria-label="dislike" 
        onClick={()=>{updateVotes(-1)}}
        >Decrease Vote</button>
    </article>

)

}


export default Voter
