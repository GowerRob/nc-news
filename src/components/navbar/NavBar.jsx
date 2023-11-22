import {useEffect, useState,useContext} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import { Link } from "react-router-dom";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { UserContext } from "../../contexts/UserContext";





const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const {user,setUser}=useContext(UserContext);
  const [loggedIn, setLoggedIn]=useState(false)

  const Menu = () =>(
    <>
      <p onClick={()=>setToggleMenu(false)}><Link to={`/`} className="Link">Home</Link></p>
      <p onClick={()=>setToggleMenu(false)}><Link to={`/articles`} className="Link">Articles</Link></p>
      <p onClick={()=>setToggleMenu(false)}><Link to={`/search`} className="Link">Search</Link></p>
      <p onClick={()=>setToggleMenu(false)}><Link to={`/topics`} className="Link">Topics</Link></p>
      <p onClick={()=>setToggleMenu(false)}><Link to={`/login`} className="Link">Users</Link></p>
      <p onClick={()=>setToggleMenu(false)}><Link to={`/about`} className="Link">About</Link></p>
      
      
    </>
  )
  
  const PopUpModal = ({visible, children, closeModal}) => {
      return (<>
              {visible && <>
              <div className='overlay'
              onClick={closeModal}></div>
              <div >{children} </div>   
              </>}
              </>
          
      );
  };
  

  const openSignIn=()=>{
    setSignInVisible(true)};

  const closeSignIn=()=>{setSignInVisible(false);};
  
  const openSignUp=()=>{
    setSignUpVisible(true)};

  const closeSignUp=()=>(setSignUpVisible(false));
  const signOut=()=>{
    setLoggedIn(false)  
    setUser(null)

  }

  useEffect((
  )=>{
    if(user!==null){
      setLoggedIn(true)
    }
  
  },[toggleMenu,user])


  const handleOpen=()=>{
    setToggleMenu(true);    
    const timer =  setTimeout(() => {
      setToggleMenu(false);   
  }, 5000)
   return () => clearTimeout(timer);

  }


  return (
    <div className='npp__navbar'>
      <div className='npp__navbar-links'>
        <div className='npp__navbar-links_logo'>
          <h2>NPP-News</h2>
        </div>
        {/* user&&<p className="loggedInAlert">{user.username}</p> */}
        <div className='npp__navbar-links_container'>
            <Menu />
        </div>
      </div>
      {!loggedIn?<div className='npp__navbar-sign'>
        <p
        onClick={openSignIn}>
            Sign In
        </p>
        <button type='button'
        onClick={openSignUp}>
            Sign Up
        </button>
      </div>:
      <div className='signOut'><button type='button'
        onClick={signOut}
        className="signInButtons">Sign Out</button></div>

        }
      <div className='npp__navbar-menu'>
        {toggleMenu
        ?<RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}></RiCloseLine>
        :<RiMenu3Line color='#fff' size={27} onClick={handleOpen}></RiMenu3Line>
        }
        {toggleMenu && (
          <div className='npp__navbar-menu_container scale-up-center'>
            <div className='npp__navbar-menu_container-links'>
              <Menu />
              <div className='npp__navbar-menu_container-links-sign'>
                <p
                onClick={openSignIn}
                >Sign In</p>

                <button type='button'
                onClick={openSignUp}
                >Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>

            <PopUpModal visible={signInVisible} closeSignIn={closeSignIn} >
                <SignInForm closeSignIn={closeSignIn}/>
            </PopUpModal>

            <PopUpModal visible={signUpVisible} closeSignUp={closeSignUp} >
                <SignUpForm closeSignUp={closeSignUp} setLoggedInExt={setLoggedIn}/>
            </PopUpModal>



    </div>
  )
}

export default Navbar