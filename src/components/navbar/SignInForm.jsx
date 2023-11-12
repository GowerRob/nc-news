import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import './navbar.css'
import { getUsers } from "../../apis/api";


const SignInForm = ({closeSignIn}) => {
    const {user,setUser}=useContext(UserContext);
    const [login, setLogin]=useState("");
    const [loggedIn,setLoggedIn]=useState(false);
    const [failedLogin,setFailedLogin]=useState(false);

    const handleLogin=(e)=>{
        e.preventDefault();
        getUsers()
        .then((res)=>{
            
            const found=res.find(userItem=>userItem['username']===login);
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

    useEffect(()=>{
        if(failedLogin){
            handleFailLogin();
        }
    },
        
        [failedLogin])

const handleFailLogin=()=>{
    const timer =  setTimeout(() => {
        setFailedLogin(false);
        closeSignIn();
    }, 2000)
     return () => clearTimeout(timer);

}


    return (
        <>
            <form className="npp__navbar-signin">
                <label>
                    Enter username: 
                    <input 
                    id="userNameInput"
                    type="text"
                    value={login}
                    onChange={e=>setLogin(e.target.value)} >
                    </input>
                

                </label>
                <button onClick={handleLogin}>Login</button>
                <button onClick={closeSignIn}>Cancel</button>
                {failedLogin&&<p>Failed to login in</p>}
            </form>

        </>
    )
}

export default SignInForm