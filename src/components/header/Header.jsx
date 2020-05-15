import React from "react";
import s from '../header/header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55hUJBQypwhxOO6dsifvOqoAWzJk2KHqO1ECcEnFRXAgkRTXpwA&s"
        width="5%"
        alt='sea'
      /> */}
      <NavLink to="/content" >
      <div className={s.logoblock}>
        <h1>REACT</h1>
        <h4 className={s.site_title}>social net</h4>
      </div>
      </NavLink>
      


      <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} <button onClick={props.logout}>Logout</button></div> 
        : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
