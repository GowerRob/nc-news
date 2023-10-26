import { Link } from "react-router-dom";
const NavBar = ()=>{

    return (
        <ul className="NavBar">
           <Link to={`/`} className="Link"><li><span className="material-symbols-outlined">home</span></li></Link>
           <Link to={`/articles`} className="Link"><li> Articles Page</li>  </Link>
           <Link to={`/topics`} className="Link"><li> Topics</li>  </Link>
           <Link to={`#`} className="Link"><li> Placeholder</li>  </Link>
        </ul>
    )


}

export default NavBar;