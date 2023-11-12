const secondsToTime=(seconds)=>{
    let returnTime=''

    if(seconds<60){
        returnTime=`${Math.round(seconds)} seconds ago`
    }else
    if(seconds<3600){
        returnTime= `${Math.round(seconds/60)} minutes ago`
    }else
    if(seconds<86400){
        returnTime= `${Math.round(seconds/3600)} hours ago`
    }else
    if(seconds<2592000){
        console.log("here")
        returnTime= `${Math.round(seconds/86400)} days ago`
    }else
    if(seconds<31536000){
        console.log("here")
        returnTime= `${Math.round(seconds/2592000)} months ago`
    }else
    {
        returnTime= `${Math.round(seconds/31536000)} years ago`
    }



    return returnTime;
}

export default secondsToTime;