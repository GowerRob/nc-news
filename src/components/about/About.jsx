import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


import './about.css'
import homepage from '../../assets/homepage.jpg' 

const LoginPage= ()=>{
    const {user,setUser}=useContext(UserContext);
    const [login, setLogin]=useState("");
    const [loggedIn,setLoggedIn]=useState(false);
    const [failedLogin,setFailedLogin]=useState(false);
    const [displayUsers, setDisplayUsers]=useState(false);
    const [allUsers, setAllUsers]=useState([]);
    const [loading,setLoading]=useState(false);



    return (

      <>

      <div className="pageContainer">
        <div className="leftSection">
          
           <p className="introText">
            
            NPP has been set up as a demonstrative app and as such passwords have not been implemented.  
           On this page you can see all the registered users on the app and login as any of them using their username.  
           Click the button below to display the list of registered users.
           
           </p>
        </div>

        <div className="rightSection">    
          <img className="imageRight" src={homepage} alt="art figures"/> 
        </div>
      </div>

   





      </>



    )


}

export default LoginPage;