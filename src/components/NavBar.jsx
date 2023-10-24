import { Link } from "react-router-dom";
const NavBar = ()=>{

    return (
        <ul className="NavBar">
           <li><h1>NavBar</h1>  </li> 
           <Link to={`/articles`}><li> Articles Page</li>  </Link>
        </ul>
    )


}

export default NavBar;