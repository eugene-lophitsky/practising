import { NavLink } from "react-router-dom";

function Menu () {
  return (
    <div className="header-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="sign-up">Sign Up</NavLink>
    </div>
  )
}

export default Menu;