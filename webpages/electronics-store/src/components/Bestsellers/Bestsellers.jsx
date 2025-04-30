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
                       <div><img src={item.img} alt="" className={styles.bestsellersImage} /></div>
                        <div>{item.title}</div>
                        <div><span>{item.price.new}</span><span>{item.price.old}</span></div>
                        <div><span><img src={item.rating.picture} alt="" /></span><span>{item.rating.count}</span></div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Bestsellers;
