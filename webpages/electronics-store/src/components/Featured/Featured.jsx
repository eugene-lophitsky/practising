import styles from '../Featured/Featured.module.css';

function Featured () {
  return (
    <div className={styles.featured}>
        <div className={styles.featuredDie}>
            <div className={styles.featuredDieImage}></div>
            <div className={styles.featuredDieText}></div>
        </div>
        <div className={styles.featuredTitle}></div>
        <div className={styles.featuredCards}></div>
    </div>
  )
}

export default Featured;