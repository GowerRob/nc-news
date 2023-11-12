
const AddArticleModal =(visible, toggleModal)=>{

    return (
        <>

           {visible&& <div>
                <div className='overlay'></div>
                <h2>Hello Modal</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab impedit omnis voluptatem. A explicabo laudantium facere rem? Necessitatibus, repellat. Tempore error assumenda voluptatem, cum repellat ipsum quam excepturi iusto, quibusdam alias neque quisquam fugiat deserunt deleniti voluptatibus nisi quo porro. Possimus inventore deleniti quis nihil totam saepe quae fuga.</p>
                <button
                  className='close-modal'
                  onClick={toggleModal}  
                >Close</button>
            </div> }
        
        
        </>
    );

}

export default AddArticleModal;