import { useLocation } from 'react-router-dom';
import searchLens from '../../icons/search-form-lens.webp';
import addToFavorites from '/add-to-favorites.svg';
import addToCart from '../../icons/add-to-cart.svg';
import '../HeaderWidgets/HeaderWidgets.css';

function HeaderWidgets () {

  const location = useLocation();

  return (

    <div className="headerWidgets">
        <form className="headerWidgetsSearch">
            <input className="headerWidgetsSearchInput" type="text" placeholder="What are you looking for?" />
            <a href="#" className="headerWidgetsSearchButton"><img src={searchLens} alt="search" /></a>
        </form>
        <span className={location.pathname === "/sign-up" ? "headerWidgetsShoppingHidden" : "headerWidgetsShopping"}>
          <a href="#" className="headerWidgetsShoppingSavorites"><img className="header-widgets__shopping-favicon" src={addToFavorites} alt="Add to favorites"/></a>
          <a href="#" className="headerWidgetsShoppingFavicon"><img src={addToCart} alt="" /></a>
        </span>
    </div>
  )
}

export default HeaderWidgets;
