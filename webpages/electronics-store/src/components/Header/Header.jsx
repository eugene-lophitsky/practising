
import HeaderMenu from "../HeaderMenu/HeaderMenu.jsx";
import HeaderWidgets from "../HeaderWidgets/HeaderWidgets";
import styles from './Header.module.css';

function Header () {

    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <span className={styles.headerMenuLogo}>Lux Store</span>
                <HeaderMenu/>
                <HeaderWidgets />
                
                
            </div>
        </div>
    )
}

export default Header;