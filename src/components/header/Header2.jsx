import { useContext,useEffect,useState } from 'react'

import './header.css'
import homepage from '../../assets/homepage.jpg' 
import SearchBar from './SearchBar';
//import ai from '../../assets/ai.png' 
import { getUsers } from "../../apis/api";
import { useNavigate } from "react-router-dom";
import { SearchContext } from '../../contexts/SearchContext';

const Header = () => {
const [numberUsers, setNumberUsers]=useState(0)


const navigate = useNavigate();
const {search,setSearch}=useContext(SearchContext);

useEffect(()=>{
  getUsers()
  .then((res)=>{
      setNumberUsers(res.length)
  })

},[])

const handleSearch=()=>{
  

  navigate("/search");
  
}


  return (
    <div className="npp__header section__padding" id="home">
      <div className="npp__header-content" >
        <h1 className='gradient__text'>NPP-News:  your home for non-partisan news</h1>
        <p>NPP news was established in 2023 as a source of news articles that reject politcal bias.  No Politics Please started as a politics free news app, but quickly evolved into the premier source of non-partisan news reporting.  Register to become a user and post articles today.</p>

        <div className='npp__header-content__input'>
           <SearchBar setSearch={setSearch} handleSearch={handleSearch}/>
        </div>
        <div className='npp__header-content__people'>
          {/* //<img src={people} alt="people"></img> */}
          <p>{numberUsers} active users - sign up now to become an early adopter</p>
        </div>

     

      </div> 
      <div className="npp__header-image">
         <img src={homepage} alt="art figures"/> 
      </div>


    </div>
  )
}

export default Header