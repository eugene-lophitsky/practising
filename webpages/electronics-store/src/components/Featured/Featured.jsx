import styles from "../Featured/Featured.module.css";
import playstation from '/playstation.webp';
import womens_collections from '/women’s _collections.webp';
import wireless_speakers from '/wireless_speakers.webp';
import gucci_parfume from '/gucci_intense_parfume.webp';

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
                    <div className={styles.featuredCardsExample1}>
                        <img src={playstation} alt="" />
                        </div>
                    <div className={styles.gridContainer}>
                    <div className={styles.featuredCardsExample2}>
                        <img src={womens_collections} alt="" />
                    </div>
                        <div className={styles.gridContainer2}>
                            <div className={styles.featuredCardsExample3}>
                                <img src={wireless_speakers} alt="" />
                            </div>
                            <div className={styles.featuredCardsExample4}>
                                <img src={gucci_parfume} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
