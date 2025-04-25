import { NavLink } from "react-router-dom";
import styles from '../HeaderMenu/HeaderMenu.module.css';

function HeaderMenu () {
  return (
    <div className={styles.headerMenu}>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="/">Home</NavLink>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="contacts">Contacts</NavLink>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="about">About</NavLink>
        <NavLink style={({isActive}) => ({textDecoration: isActive ? "underline" : "none", color: isActive ? "000000" : "#000000"})} to="sign-up">Sign Up</NavLink>
    </div>
  )
}

export default HeaderMenu;