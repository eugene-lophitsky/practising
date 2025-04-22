import searchLens from '../../icons/search-form-lens.webp';
import addToFavorites from '../../icons/add-to-favorites.svg';
import addToCart from '../../icons/add-to-cart.svg';

function HeaderWidgets () {
  return (

    <div className="header-widgets">
        <form className="header-widgets__search">
            <input className="header-widgets__search-input" type="text" placeholder="What are you looking for?" />
            <a href="#" className="header-widgets__search-button"><img src={searchLens} alt="search" /></a>
        </form>
        <span className="header-widgets__shopping">
          <a href="#" className="header-widgets__shopping-favorites"><img className="header-widgets__shopping-favicon" src={addToFavorites} alt="Add to favorites"/></a>
          <a href="#" className="header-widgets__shopping-cart"><img src={addToCart} alt="" /></a>
        </span>
    </div>
  )
}

export default HeaderWidgets;
