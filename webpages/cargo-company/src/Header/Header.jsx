import { useState } from 'react';
import logo from '/header-logo.png';
import burgerMenuClosed from '/burger-menu-closed.png';
import burgerMenuOpened from '/burger-menu-opened.png';

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

               <ul className={burgerMenu ? "header-mobile-menu--show" : "header-mobile-menu"}>
                    <li className="header-mobile-menu__item"><a href="#" className="header-mobile-menu__link">Цены и сроки</a></li>
                    <li className="header-mobile-menu__item"><a href="#" className="header-mobile-menu__link">Услуги</a></li>    
                    <li className="header-mobile-menu__item"><a href="#" className="header-mobile-menu__link">О компании</a></li>    
                    <li className="header-mobile-menu__item"><a href="#" className="header-mobile-menu__link">Контакты</a></li>    
                    <li className="header-mobile-menu__item"><a href="#" className="header-mobile-menu__link">Оформить груз</a></li>    
               </ul>
  


            <a href="#" className="header__button">Оставить заявку</a>
            <div className="burger-menu" onClick={newButton}>
                <img src={burgerMenu ? burgerMenuOpened : burgerMenuClosed} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header;