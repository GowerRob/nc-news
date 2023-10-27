import { useState,useEffect } from "react"


const Voter = ({type, votes,update}) => {
    const [thumb,setThumb]=useState("start")
    const [displayVotes,setDisplayVotes]=useState(votes);
    const [thumb1,setThumb1]=useState("greyThumb");
    const [thumb2,setThumb2]=useState("greyThumb");

    const updateVotes = (value)=>{
        if(value==="up"){
            setThumb("up")
            setThumb1("blueThumb")
            setThumb2("greyThumb")
            if(thumb==="start"){
                setDisplayVotes((current)=>current+1)
                update(+1)
            }else
            if(thumb==="down"){
                setDisplayVotes((current)=>current+2)
                update(+2)
            }else
            if(thumb=="up"){
                setDisplayVotes((current)=>current-1)
                update(-1)
                setThumb("start")
                setThumb1("greyThumb")
            }
        }

        if(value==="down"){
            setThumb("down")
            setThumb1("greyThumb")
            setThumb2("blueThumb")
            if(thumb==="start"){
                setDisplayVotes((current)=>current-1)
                update(-1)
            }else
            if(thumb==="down"){
                setDisplayVotes((current)=>current+1)
                update(+1)
                setThumb("start")
                setThumb2("greyThumb")
            }else
            if(thumb=="up"){
                setDisplayVotes((current)=>current-2)
                update(-2)
            }
        }
    }

return(
    <article className="ThumbHolder">
        <button 
        // disabled={thumb==='up'}
        className="UpThumbButton"
        aria-label="like" 
        onClick={()=>{updateVotes('up')}}
        ><span className={`material-symbols-outlined thumb ${thumb1}`}>
        thumb_up
        </span> {displayVotes}</button>

        <button 
        // disabled={thumb==='down'}
        className="DownThumbButton"
        aria-label="dislike" 
        onClick={()=>{updateVotes('down')}}
        ><span className={`material-symbols-outlined thumb ${thumb2}`}>
        thumb_down
        </span></button>
    </article>

    // <article>
    // <p>Start vote: {startVotes}</p>
    // <p>{type} : {votes+userVotes}</p>
    // <button 
    // disabled={userVotes===1}
    // aria-label="like" 
    // onClick={()=>{updateVotes(1)}}
    // >Thumb Up</button>

    // <button 
    // disabled={userVotes===-1}
    // aria-label="dislike" 
    // onClick={()=>{updateVotes(-1)}}
    // >Thumb Down</button>
    // </article> 

)

}


export default Voter
