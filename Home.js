import React from "react";
import { Link, Outlet } from "react-router-dom";

import { FaHouseUser } from "react-icons/fa";
import Layout from "../Mypage";
import Login from "../Login";
//import Layout from "./Mypage";

 
const Header = () => {
  return (
   
      <>
      <div>
       <Layout/>
       </div>
       <div>
         <ul>
          <li>
          <Link to="/">Home </Link>
          </li>
          <li>
          <Link to="icon">HomeIcon</Link>
          </li>
          <li>
            <Link to="Login">Login</Link>
            </li>

            <li>
            <Link to="Mypage">Mypage</Link>
            </li>
          <li>
            <Link to="/dayWish">wishing</Link>
          </li>
          <li>
            <Link to="/fun1">function</Link>
          </li>
          <li>
            <Link to="Information">Information</Link>
          </li>
          <li>
            <Link to="increaseNum">Increase Number</Link>
          </li>
        </ul>
      </div>
   
      <Outlet />
    </>
    
  );
};

export default Header;