import styles from "../Bestsellers/Bestsellers.module.css";
import bestsellers from "./data.js";


function Bestsellers() {
    return (
        <div className={styles.bestsellers}>
            <div className={styles.bestsellersDie}>
                <div className={styles.bestsellersDieImg}></div>
                <div className={styles.bestsellersDieText}>This Month</div>
            </div>
            <div className={styles.bestsellersTitle}>Best Selling Products</div>

            <div className={styles.bestsellersList}>
                {bestsellers.map(item => (
                    <div key={item.title} className={styles.bestsellersItem}>
                           <div className={styles.bestsellersWidgets}>
                                <a href="#" className={styles.bestsellersWidgetsFavorites}>
                                    <img className={styles.bestsellersWidgetsFavIcon} src={item.favorites} alt="" />
                                </a>
                                <a href="#" className={styles.bestsellersWidgetsToggle}>
                                    <img className={styles.bestsellersWidgetsToggleIcon} src={item.toggle} alt="" />
                                </a>
                            </div>

                       <div><img src={item.img} alt="" className={styles.bestsellersItemImage} /></div>
                        <div className={styles.bestsellersItemTitle}>{item.title}</div>
                        <div className={styles.bestsellersItemPrice}><span className={styles.bestsellersItemPriceNew}>{item.price.new}</span><span className={styles.bestsellersItemPriceOld}>{item.price.old}</span></div>
                        <div className={styles.bestsellersRating}><img src={item.rating.picture} alt="" /><span className={styles.bestsellersRatingCount}>{item.rating.count}</span></div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Bestsellers;


