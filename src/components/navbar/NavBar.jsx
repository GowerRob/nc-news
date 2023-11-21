import {useEffect, useState,useContext} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
//import logo from '../../assets/logo.svg'
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
      <p onClick={()=>setToggleMenu(false)}><Link to={`/login`} className="Link">About</Link></p>
      
      
    </>
  )
  
  const PopUpModal = ({visible, children, closeModal}) => {
      return (<>
              {visible && <>
              <div className='overlay'
              onClick={closeModal}></div>
              <div className="modal-content">{children} </div>   
              </>}
              </>
          
      );
  };
  

  const openSignIn=()=>{
    setSignInVisible(true)};

  const closeSignIn=()=>{console.log("SignClose");setSignInVisible(false);};
  
  const openSignUp=()=>{
    setSignUpVisible(true)};

  const closeSignUp=()=>(setSignUpVisible(false));
  const signOut=()=>{
    setLoggedIn(false)  
    setUser(null)

  }

  useEffect((
  )=>{
    console.log(user)
    if(user!==null){
      setLoggedIn(true)
    }
  
  },[toggleMenu,user])



  return (
    <div className='npp__navbar'>
      <div className='npp__navbar-links'>
        <div className='npp__navbar-links_logo'>
          <h2>NPP-News</h2>
        </div>
        {loggedIn&&<p>{user.username}</p>}
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
      </div>:<button type='button'
        onClick={signOut}>Sign Out</button>}
      <div className='npp__navbar-menu'>
        {toggleMenu
        ?<RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}></RiCloseLine>
        :<RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}></RiMenu3Line>
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
                <SignUpForm closeSignUp={closeSignUp}/>
            </PopUpModal>



    </div>
  )
}

export default Navbar