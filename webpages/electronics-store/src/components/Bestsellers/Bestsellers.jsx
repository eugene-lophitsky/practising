import styles from '../Bestsellers/Bestsellers.module.css';

function Bestsellers () {
  return (
    <div className={styles.bestsellers}>
        <div className={styles.bestsellersDie}>
            <div className={styles.bestsellersDieImg}></div>
            <div className={styles.bestsellersDieText}></div>
        </div>
        <div className={styles.bestsellersTitle}></div>
        <div className={styles.bestsellersList}></div>
    </div>
  )
}

export default Bestsellers;