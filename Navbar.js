import "./style.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

export default function Navbar() {
  let navigate = useNavigate();
  let {userLogin, setUserLogin}=useContext(UserContext)
 //console.log(userLogin);
//console.log(userLogin?.permission);


  return (
    <div className="header gradientLine">
      <ul>
        <li>
          <NavLink className="navbarLink" to="/">
            {/* <NavLink className="navbarLink" to="/"> */}
            homePage
          </NavLink>
        </li>
        {userLogin?.permission === "admin" ?      <li>
          {<NavLink className="navbarLink" to="/admin">
            admin
          </NavLink>}
        </li>: ''}  
        {!userLogin? <li>
          <NavLink className="navbarLink" to="/userpage">
            sign up
          </NavLink>
        </li>:''}
        <li>      {userLogin?._id?<button className="logoutbutto" onClick={()=>setUserLogin('')}>Log out</button>:''}
</li>
      </ul>
    </div>
  );
}
