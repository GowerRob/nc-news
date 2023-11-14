import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
//import logo from '../../assets/logo.svg'
import './navbar.css'
import { Link } from "react-router-dom";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Menu = () =>(
  <>
    <p><Link to={`/`} className="Link">Home</Link></p>
    <p><Link to={`/articles`} className="Link">Articles</Link></p>
    <p><Link to={`/topics`} className="Link">Topics</Link></p>
    <p><Link to={`/login`} className="Link">Users</Link></p>
    <p><Link to={`/login`} className="Link">About</Link></p>
    
    
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





const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);

  const openSignIn=()=>{
    setSignInVisible(true)};

  const closeSignIn=()=>(setSignInVisible(false));
  
  const openSignUp=()=>{
    setSignUpVisible(true)};

  const closeSignUp=()=>(setSignUpVisible(false));




  return (
    <div className='npp__navbar'>
      <div className='npp__navbar-links'>
        <div className='npp__navbar-links_logo'>
          <h2>NPP-News</h2>
        </div>
        <div className='npp__navbar-links_container'>
            <Menu />
        </div>
      </div>
      <div className='npp__navbar-sign'>
        <p
        onClick={openSignIn}>
            Sign In
        </p>
        <button type='button'
        onClick={openSignUp}>
            Sign Up
        </button>
      </div>
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