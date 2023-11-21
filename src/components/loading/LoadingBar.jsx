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
                <h2 className="waitText">Thanks for waiting... we are using a free hosting service, it's probably waking up :)</h2>

             </div>
            
    </>

    )
}

export default LoadingBar;