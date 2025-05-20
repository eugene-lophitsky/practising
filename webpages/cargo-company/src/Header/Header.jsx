import logo from '/header-logo.png';

function Header () {
  return (
    <div className="header">
        <div className="header__wrapper">
            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li className="header-menu__item"><a href="#" className="header-menu__link">Цены и сроки</a></li>
                        <li className="header-menu__item"><a href="#" className="header-menu__link">Услуги</a></li>    
                        <li className="header-menu__item"><a href="#" className="header-menu__link">О компании</a></li>    
                        <li className="header-menu__item"><a href="#" className="header-menu__link">Контакты</a></li>    
                        <li className="header-menu__item"><a href="#" className="header-menu__link">Оформить груз</a></li>    
                    </ul>
                </nav>

                <a href="#" className="header__button">Оставить заявку</a>
        </div>
    </div>
  )
}

export default Header;