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
                <div className={styles.ouProductsTitle}></div>

                <div className={styles.ourProductsList}>
 
                    {products.map(item => (
                          <div className={styles.ourProductsListItem} key={item.title}>
                          <div className={styles.ourProductsItemImage}>
                            <img src={item.img} alt="" />
                          </div>
                          <div className={styles.ourProductsItemTitle}>{item.title}</div>

                          <div className={styles.ourProductsItemDetails}>
                              <span className={styles.ourProductsItemPrice}>{item.price}</span>
                              <div className={styles.ourProductsItemRating}>
                                    <img src={item.rating.picture} alt="" className={styles.ourProductsItemRatingImage} />
                                  <span className={styles.ourProductsItemRatingText}>{item.rating.count}</span>
                              </div>
                          </div>
                    </div>
                    ))}
                      

                       
                </div>
            </div>
        </div>
    );
}

export default OurProducts;
