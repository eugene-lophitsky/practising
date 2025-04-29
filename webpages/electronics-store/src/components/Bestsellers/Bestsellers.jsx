import styles from '../Bestsellers/Bestsellers.module.css';

function Bestsellers () {
  return (
    <div className={styles.bestsellers}>
        <div className={styles.bestsellersDie}>
            <div className={styles.bestsellersDieImg}></div>
            <div className={styles.bestsellersDieText}>This Month</div>
        </div>
        <div className={styles.bestsellersTitle}>Best Selling Products</div>
        <div className={styles.bestsellersList}></div>
    </div>
  )
}

export default Bestsellers;