import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUsers } from "../../apis/api";
import UserCard from "./UserCard";
import LoadingBar from '../loading/LoadingBar';
import './login.css'
import homepage from '../../assets/homepage.jpg' 

const LoginPage= ()=>{
    const {user,setUser}=useContext(UserContext);
    const [login, setLogin]=useState("");
    const [loggedIn,setLoggedIn]=useState(false);
    const [failedLogin,setFailedLogin]=useState(false);
    const [displayUsers, setDisplayUsers]=useState(false);
    const [allUsers, setAllUsers]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoggedIn(false);
        setFailedLogin(false);

    },[login])


    const handleLogin=(e)=>{
        e.preventDefault();
        setDisplayUsers(false)
        getUsers()
        .then((res)=>{
            
            const found=res.find(user=>user['username']===login);
            if(found){
                setUser(found)
                setLoggedIn(true)
            }else{
                setUser(null)
                setLoggedIn(false)
                setFailedLogin(true)
            }
        })
    }

    const handleShowUsers=(e)=>{
      e.preventDefault();
      setLoading(true)
      setDisplayUsers(true);
      getUsers()
      .then((res)=>{
        setLoading(false)
        setAllUsers(res.map((user)=>{
          return user['username']}))
      })

    }
    
    const handleHide=(e)=>{
      e.preventDefault();
      setDisplayUsers(false);
    }
    
    
    return (

      <>

      <div className="pageContainer">
        <div className="leftSection">
          
           <p className="introText">NPP has been set up as a demonstrative app and as such we haven't implement passwords.  On this page you can see all the registered users on the app and login as any of them using their username.  Click the button below to display the list of registered users.</p>
          {!displayUsers&&
      <button className="DisplayUsers" onClick={handleShowUsers}>Display Valid Users</button>
    }
       {displayUsers&&!loading&&
    <>
      <ul className="UserList">
        {allUsers.map(userItem=>{
          return(
                <UserCard  key={userItem} user={userItem}/>
          )
        })}
      </ul>
      <button className="DisplayUsers"  onClick={handleHide}>Hide</button>
      </>
      }
      <section>    
      <form 
      className="LoginForm"
      onSubmit={handleLogin}> 

      <label className="userPrompt">Enter your username:
        <input 
        id="UserNameInput"
          type="text"
          value={login}
          onChange={e=>setLogin(e.target.value)} 
          required/>
        <button className="LoginButton">Login</button>
      </label>
    </form>
    {loggedIn&&user&&
      <h3 className="alertText">{`Hello ${user.name}, logged in as ${user.username}`}</h3>}

    {failedLogin&&<h3 className="alertText">{`${login} is not a valid user. All accounts logged out`}</h3>}



    {loading&&
      <LoadingBar/>}
    
 


       </section>
        </div>

        <div className="rightSection">

          
          <img className="imageRight" src={homepage} alt="art figures"/> 
        </div>


      </div>
      





      <div className="login_container">   
      <div className="login_left border">
      

    </div>    

      <div className="border right">
     

      </div>
    
    </div>


      </>



    )


}

export default LoginPage;