import styles from "./Featured.module.css";
import data from "./data.js";

function FeaturedServices() {
    return (
        <div className={styles.featuredServices}>
            {data.map((card) => (
                <div className={styles.featuredService} key={card.details}>
                    <div className={styles.featuredServiceButton}>
                        <div className={styles.featuredServiceButtonIcon}>
                            <img src={card.aboutCardIcon} alt="" />
                        </div>
                    </div>
                    <div className={styles.featuredServiceName}>
                        {card.title}
                    </div>
                    <div className={styles.featuredServiceText}>
                        {card.details}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FeaturedServices;
