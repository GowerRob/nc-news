import './loading.css'

const LoadingBar =()=>{

    return(<>
            <div className='LoadingContainer'>
                <div>
                    <div className="LoadingDot"></div>
                <div className="LoadingDot"></div>
                <div className="LoadingDot"></div>
                <div className="LoadingDot"></div>
                <div className="LoadingDot"></div>
                </div>
                <h2 className="waitText">Thank you for waiting... we are using a free server</h2>

             </div>
            
    </>

    )
}

export default LoadingBar;