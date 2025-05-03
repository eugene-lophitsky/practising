import styles from "../OurProducts/OurProducts.module.css";
import products from './products.js';

function OurProducts() {
    return (
        <div className={styles.ourProducts}>
            <div className={styles.ourProductsWrapper}>
                <div className={styles.ourProductsDie}>
                    <div className={styles.ourProductsDieImage}></div>
                    <div className={styles.ourProductsDieText}>Explore Our Products</div>
                </div>
                <div className={styles.ouProductsTitle}>Explore Our Products</div>
                <div className={styles.ourProductsList}>
                    {products.map(item => (
                          <div className={styles.ourProductsListItem} key={item.title}>
                            <div className={styles.ourProductsItemWidgets}>
                                <a href="#" className={styles.ourProductsItemFavorites}>
                                    <img className={styles.ourProductsItemFavIcon} src={item.favorites} alt="" />
                                </a>
                                <a href="#" className={styles.ourProductsItemToggle}>
                                    <img className={styles.ourProductsItemToggleIcon} src={item.toggle} alt="" />
                                </a>
                            </div>  
                          <div className={styles.ourProductsItemImageWrapper}>
                            <img src={item.img} alt="" className={styles.ourProductsItemImage}/>
                          </div>
                          <div className={styles.ourProductsItemTitle}>{item.title}</div>
                          <div className={styles.ourProductsItemDetails}>
                              <span className={styles.ourProductsItemPrice}>{item.price}</span>
                              <div className={styles.ourProductsItemRating}>
                                    <div className={styles.ourProductsItemRatingImage}><img src={item.rating.picture} alt="" /></div>
                                  <span className={styles.ourProductsItemRatingText}>{item.rating.count}</span>
                              </div>
                          </div>
                    </div>
                    ))}
                </div>
                <a href="#" className={styles.ourProductsAddInfoButton}>View All Products</a>
            </div>
        </div>
    );
}

export default OurProducts;
