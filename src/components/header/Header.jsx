import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUsers } from "../../apis/api";

const Header = ()=>{

    const[loginId, setLoginId]=useState('')
    const[loginFail, setLoginFail]=useState(false)
    const[search, setSearch]=useState('')

    const {user,setUser}=useContext(UserContext);
    const defaultURL='https://source.unsplash.com/a-long-hallway-with-green-and-white-walls-YpaTkZ9hvj4'

    const handleLogout=(e)=>{
        e.preventDefault();
        setUser(null);

    }


    const handleLogin=(e)=>{
        e.preventDefault();
        getUsers()
        .then((res)=>{
            
            const found=res.find(user=>user['username']===loginId);
            if(found){
                setUser(found)
                setLoginFail(false)
            }else{
                setUser(null)
                setLoginFail(true)
            }
        })
    }

    return (
    <ul className="pageHeader">
        <div className="miniLoginFrame">
        {!user&&
            <form 
            className="miniLogin"
            onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                    id="miniUserLogin"
                    type="text"
                    required
                    value={loginId}
                    onChange={e=>setLoginId(e.target.value)}></input>
                    <button>Login</button>

                </label>
            </form>  
        }
        {loginFail&&<article className="loginFail">
                        <p >Not a valid user - try again</p>
                        <p >Go to login page for assistance</p>
                    </article>}
        {user&&
            <li >
                <img className="avatar-small" src={user===null?defaultURL:`${user.avatar_url}`}></img>
                <p>{`${user.username}`}</p>
                <button onClick={handleLogout}>Logout</button>
            </li>
        }

        </div>
       </ul>   
    )

  



}

export default Header;