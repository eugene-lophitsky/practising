import styles from "../Featured/Featured.module.css";
import playstation from "/playstation.webp";
import womens_collections from "/women’s _collections.webp";
import wireless_speakers from "/wireless_speakers.webp";
import gucci_parfume from "/gucci_intense_parfume.webp";
import data from "./data.js";

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
                    <div className={styles.featuredCardFirst}>
                            <div className={styles.featuredCardFirstText}>
                                <div className={styles.featuredCardTitle}>PlayStation 5</div>
                                <div className={styles.featuredCardDetails}>Black and White version of the PS5 coming out on sale.</div>
                                <a href="#" className={styles.featuredCardLink}>Shop Now</a>
                            </div>
                        <img src={playstation} alt="" />
                    </div>
                    <div className={styles.gridContainer}>
                        <div className={styles.featuredCardSecond}>
                                <div className={styles.featuredCardSecondText}>
                                    <div className={styles.featuredCardTitle}>Women’s Collections</div>
                                    <div className={styles.featuredCardDetails}>Featured woman collections that give you another vibe.</div>
                                    <a href="#" className={styles.featuredCardLink}>Shop Now</a>
                                </div>
                            <div className={styles.featuredCardsExample2}></div>
                            <img src={womens_collections} alt="" />
                        </div>
                        <div className={styles.gridContainer2}>
                            <div className={styles.featuredCardThird}>
                                <div className={styles.featuredCardThirdText}>
                                        <div className={styles.featuredCardTitle}>Speakers</div>
                                        <div className={styles.featuredCardDetailsPadding}>Amazon wireless speakers</div>
                                        <a href="#" className={styles.featuredCardLink}>Shop Now</a>
                                    </div>
                                <img src={wireless_speakers} alt="" />
                            </div>
                            <div className={styles.featuredCardFourth}>
                                    <div className={styles.featuredCardFourthText}>
                                        <div className={styles.featuredCardTitle}>Perfume</div>
                                        <div className={styles.featuredCardDetailsPadding}>GUCCI INTENSE OUD EDP</div>
                                        <a href="#" className={styles.featuredCardLink}>Shop Now</a>
                                    </div>
                                <img src={gucci_parfume} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.featuredServices}>
                   {data.map(card => (
                    <div className={styles.featuredService} key={card.details}>
                        <div className={styles.featuredServiceButton}>
                            <div className={styles.featuredServiceButtonIcon}><img src={card.aboutCardIcon} alt="" /></div>
                        </div>
                        <div className={styles.featuredServiceName}>{card.title}</div>
                        <div className={styles.featuredServiceText}>{card.details}</div>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    );
}

export default Featured;