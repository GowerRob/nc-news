import '../loading.css'

const LoadingBar =()=>{

    return(
        <div className='LoadingContainer'>
            <p>{`Please wait while we load from free-tier ;)`}</p>
            <div className="LoadingDot"></div>
            <div className="LoadingDot"></div>
            <div className="LoadingDot"></div>
            <div className="LoadingDot"></div>
            <div className="LoadingDot"></div>

        </div>
    )
}

export default LoadingBar;