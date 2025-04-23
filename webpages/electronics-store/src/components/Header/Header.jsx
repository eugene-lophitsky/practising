import Menu from "../Menu/Menu";
import { useLocation } from "react-router-dom";
import HeaderWidgets from "../HeaderWidgets/HeaderWidgets";

function Header () {

    const myLocation = useLocation();
    console.log(myLocation)

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