import { NavLink } from "react-router-dom";

function Menu () {
  return (
    <div className="header-menu">
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="/">Home</NavLink>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="contacts">Contacts</NavLink>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="about">About</NavLink>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="sign-up">Sign Up</NavLink>
    </div>
  )
}

export default Menu;