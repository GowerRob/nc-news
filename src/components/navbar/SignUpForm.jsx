import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import './navbar.css'
import { postUser } from "../../apis/api";


const SignUpForm = ({closeSignUp,setLoggedInExt}) => {
    const {user,setUser}=useContext(UserContext);
    const [entereredUsername, setentereredUsername]=useState("");
    const [entereredName, setEntereredName]=useState("");
    const [entereredURL, setEntereredURL]=useState("");
    const [loggedIn,setLoggedIn]=useState(false);
    const [failedLogin,setFailedLogin]=useState(false);
    const [postedUser,setPostedUser]=useState(null);
    const [signUpConfirm,setSignUpConfirm]=useState("");

    const handleSignUp=(e)=>{
        e.preventDefault();
        const postableUser={
            username:entereredUsername,
            name:entereredName
        }

        if(entereredURL.length!==0){
            postableUser.avatar_url=entereredURL
        }
        
        postUser(postableUser)
        .then((response)=> {
            setSignUpConfirm(response.data.user.username)
            setLoggedInExt(true);
            closeSignUp();
          })
          .catch(()=> {
            setFailedLogin(true)
          });


    }



    useEffect(()=>{
        if(failedLogin){
            handleFailLogin();
        }
    },[failedLogin])


const handleFailLogin=()=>{
    const timer =  setTimeout(() => {
        setFailedLogin(false);
        closeSignUp();
    }, 3000)
     return () => clearTimeout(timer);

}


    return (
        <div className="modal-content">
            <form className="npp__navbar-signup">
                <label htmlFor="usernameInput" className='navLabel'>
                    Enter username: 
                    <input 
                    id="usernameInput"
                    type="text"
                    value={entereredUsername}
                    onChange={e=>setentereredUsername(e.target.value)} >
                    </input>
                </label>
                <label htmlFor="nameInput"className='navLabel'>
                    Enter name: 
                    <input 
                    id="nameInput"
                    type="text"
                    value={entereredName}
                    onChange={e=>setEntereredName(e.target.value)} >
                    </input>
                </label>
                <label htmlFor="avatarInput" className='navLabel'>
                    Enter Avatar URL: 
                    <input 
                    id="avatarInput"
                    type="text"
                    value={entereredURL}
                    onChange={e=>setEntereredURL(e.target.value)} >
                    </input>
                    <p>(Leave blank to use default avatar)</p>
                </label>

                <button onClick={handleSignUp} className="signInButtons">Sign Up</button>
                <button onClick={closeSignUp} className="cancelButtons">Cancel</button>
                {failedLogin&&<p>Failed signup. Try a different username</p>}
                {postedUser}
            </form>

        </div>
    )
}

export default SignUpForm