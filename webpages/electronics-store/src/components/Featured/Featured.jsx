import styles from "../Featured/Featured.module.css";

function Featured() {
    return (
        <div className={styles.featured}>
            <div className={styles.featuredWrapper}>
                <div className={styles.featuredDie}>
                    <div className={styles.featuredDieImage}></div>
                    <div className={styles.featuredDieText}>Featured</div>
                </div>
                <div className={styles.featuredTitle}>New Arrival</div>
                <div className={styles.featuredCards}>
                    <div className={styles.featuredCardsExample1}>PlayStation 5</div>
                    <div className={styles.gridContainer}>
                    <div className={styles.featuredCardsExample2}>Women’s Collections</div>
                        <div className={styles.gridContainer2}>
                            <div className={styles.featuredCardsExample3}>Speakers</div>
                            <div className={styles.featuredCardsExample4}>Perfume</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
