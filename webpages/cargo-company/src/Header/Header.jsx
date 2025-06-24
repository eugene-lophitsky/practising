import { useState } from 'react';
import logo from '/header-logo.png';
import burgerMenuClosed from '/burger-menu-closed.png';

function Header () {

const [burgerMenu, setBurgerMenu] = useState();

  function newButton () {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <div className="header">
        <div className="header__wrapper">
            <div className="header-logo__wrapper">
                <img src={logo} alt="" className="header-logo" />
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

            <div className="burger-menu" onClick={newButton}>
                <img src={burgerMenu ? burgerMenuClosed : burgerMenuClosed} alt="" />
            </div>



                    {/* <div className="menu">
                      <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                      <label htmlFor="burger-checkbox" className="burger"></label>
                      <ul className="menu-list">
                      <li><a href="#" className="menu-item">Home</a></li>
                      <li></li>
                      <li><a href="#" className="menu-item">Package</a></li>
                      <li></li>
                      <li><a href="#" className="menu-item">Destination</a></li>
                      <li><a href="#" className="menu-item">Blog</a></li>
                      <li><a href="#" className="menu-item">Contact</a></li>
                      </ul>
                    </div> */}
        </div>
    </div>
  )
}

export default Header;