
function Header () {
    return (
        <div className="header">
            <div className="header__wrapper">
                <span className="header__logo">Bean Scene</span>
                <span className="header__links">
                    <a href="#" className="header__link">Home</a>
                    <a href="#" className="header__link">Menu</a>
                    <a href="#" className="header__link">About Us</a>
                    <a href="#" className="header__link">Contact Us</a>
                </span>
                <div className="header-signing">
                    <a href="#" className="header-signing__signin-link">Sign In</a>
                    <a href="#" className="header-signing__signup-button">SignUp</a>
                </div>
            </div>
        </div>
    )
}

export default Header;