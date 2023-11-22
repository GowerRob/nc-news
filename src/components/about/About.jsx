import './about.css'
import homepage from '../../assets/homepage.jpg' 

const LoginPage= ()=>{



    return (

      <>

      <div className="pageContainer">
        <div className="leftSection">
          
          <h3 className="introText">Suggested Journey</h3>
           <p className="introText">
            Many of the features of NPP can only be accessed when signed in.  Below is a suggested journey through the app that will demonstrate the core features.
           </p>
           <ol className='introText'>
            <li>Use the Sign Up button in the top right to create a new user account.  A URL to a pre-existing avatar can be given, but if left blank a default will be used. Alternatively, you can go to the Users section to display pre-existing users and log in as one of those. </li>
            <li>From the Home page you can try searching for a specific article.  In the early days of the app with limited articles, we suggest the search terms "history", "football" or "react", but the app will respond to any search term</li>
            <li>Once you have selected an article, you will be able to read it and, if logged in, post comments below, as well us up/down voting the article itself, and other users comments</li>
            <li>You can create new articles using the button at the top of the articles page, ensuring you select a topic for the article to be labeled by.  If your desired topic is not available, you can create the topic on the Topics page, where you can also select to view articles by topic.</li>
           </ol>
        </div>

        <div className="rightSection">    
          <img className="imageRight" src={homepage} alt="art figures"/> 
        </div>
      </div>

   





      </>



    )


}

export default LoginPage;