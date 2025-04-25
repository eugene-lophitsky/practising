import HeaderMenu from "../HeaderMenu/HeaderMenu.jsx";
import { useLocation } from "react-router-dom";
import HeaderWidgets from "../HeaderWidgets/HeaderWidgets";
import styles from './Header.module.css';

function Header () {
    const myLocation = useLocation();
    console.log(myLocation)

    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <span className={styles.headerMenuLogo}>Lux Store</span>
                <HeaderMenu/>
                <HeaderWidgets/>
            </div>
        </div>
    )
}

export default Header;