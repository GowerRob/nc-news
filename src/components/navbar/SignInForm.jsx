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
        console.log("222")
        getUsers()
        .then((res)=>{
            console.log("333")
            const found=res.find(userItem=>userItem['username']===login);
            if(found){
                setUser(found)
                setLoggedIn(true)
                console.log("444")
                closeSignIn();
            }else{
                setUser(null)
                setLoggedIn(false)
                setFailedLogin(true)
                console.log("555")
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
        <div className="modal-content 2">
            <form className="npp__navbar-signin" onSubmit={handleLogin}>
                <label className='navLabel'>
                    Enter username: 
                    <input 
                    id="userNameInput"
                    type="text"
                    value={login}
                    onChange={e=>setLogin(e.target.value)} >
                    </input>
                </label>

                <button type='submit' className="signInButtons">Login</button>
                <button onClick={closeSignIn} className="cancelButtons">Cancel</button>
                {failedLogin&&<p>Failed to login in</p>}
            </form>

        </div>
    )
}

export default SignInForm