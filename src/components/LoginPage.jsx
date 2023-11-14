import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../apis/api";
import UserCard from "./UserCard";
import LoadingBar from '../components/loading/LoadingBar';

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
        <section>    
        <form 
        className="LoginForm"
        onSubmit={handleLogin}> 

        <label>Enter your username:
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
        <h1>{`Hello ${user.name}, logged in as ${user.username}`}</h1>}

      {failedLogin&&<h1>{`${login} is not a valid user. All accounts logged out`}</h1>}

      {!displayUsers&&
        <button className="DisplayUsers" onClick={handleShowUsers}>Display Valid Users</button>
      }

      {loading&&
        <LoadingBar/>}
      
      {displayUsers&&!loading&&
      <>
        <ul className="UserList">
          {allUsers.map(userItem=>{
            return(
                  <UserCard  key={userItem} user={userItem}/>
            )
          })}
        </ul>
        <button onClick={handleHide}>Hide</button>
        </>
        }


      </section>

    )


}

export default LoginPage;