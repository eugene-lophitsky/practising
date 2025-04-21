import Menu from "../Menu/Menu";

function Header () {
    return (
        <div className="header">
            <div className="header__wrapper">
                <span className="header-menu__logo">Lux Techstore</span>
                <Menu/>
            </div>
        </div>
    )
}

export default Header;