import Menu from "../Menu/Menu";
import HeaderWidgets from "../HeaderWidgets/HeaderWidgets";

function Header () {
    return (
        <div className="header">
            <div className="header__wrapper">
                <span className="header-menu__logo">Lux Store</span>
                <Menu/>
                <HeaderWidgets/>
            </div>
        </div>
    )
}

export default Header;