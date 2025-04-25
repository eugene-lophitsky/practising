import searchLens from '../../icons/search-form-lens.webp';
import addToFavorites from '../../icons/add-to-favorites.svg';
import addToCart from '../../icons/add-to-cart.svg';
import styles from '../HeaderWidgets/HeaderWidgets.module.css';

function HeaderWidgets () {
  return (

    <div className={styles.headerWidgets}>
        <form className={styles.headerWidgetsSearch}>
            <input className={styles.headerWidgetsSearchInput} type="text" placeholder="What are you looking for?" />
            <a href="#" className={styles.headerWidgetsSearchButton}><img src={searchLens} alt="search" /></a>
        </form>
        <span className={styles.headerWidgetsShopping}>
          <a href="#" className={styles.headerWidgetsShoppingSavorites}><img className="header-widgets__shopping-favicon" src={addToFavorites} alt="Add to favorites"/></a>
          <a href="#" className={styles.headerWidgetsShoppingFavicon}><img src={addToCart} alt="" /></a>
        </span>
    </div>
  )
}

export default HeaderWidgets;
