import styles from './About.module.css';
import jumbotronPhoto from '/about-us-jumbotron.webp';
import aboutCards from './aboutCards.js';

function About () {
    return (
        <div className={styles.about}>
            <div className={styles.aboutJumbotron}>
                <div className={styles.aboutJumbotronDescription}>
                   <div className={styles.aboutJumbotronWrapper}>
                        <div className={styles.aboutJumbotronDescriptionTitle}>Our Story</div>
                        <div className={styles.aboutJumbotronDescriptionText}>
                            <p className={styles.aboutJumbotronDescriptionSection}>
                            Launced in 2015, Exclusive is South Asia’s premier
                            online shopping makterplace with an active presense
                            in Bangladesh. Supported by wide range of tailored 
                            marketing, data and service solutions, Exclusive 
                            has 10,500 sallers and 300 brands and serves 3 
                            millioons customers across the region.
                            </p>
                            <p className={styles.aboutJumbotronDescriptionSection}>
                            Exclusive has more than 1 Million products to offer,
                            growing at a very fast. Exclusive offers a diverse 
                            assotment in categories ranging  from consumer.
                            </p> 
                        </div>
                    </div>
                </div>
                <div className={styles.aboutJumbotronImage}>
                    <img src={jumbotronPhoto} alt="" />
                </div>
            </div>
            <div className={styles.aboutAchievements}>
                {aboutCards.map(aboutCard => (
                    <div key={aboutCard.details} className={styles.aboutAchievementsCard}>
                        <span className={styles.aboutAchievementsButtonWrapper}>
                            <a className={styles.aboutAchievementsButton}>
                                <img src={aboutCard.aboutCardIcon} alt="" className={styles.aboutAchievementsButtonIcon}/>
                            </a>
                        </span>
                        <div className={styles.aboutAchievementsAmount}>{aboutCard.amount}</div>
                        <div className={styles.aboutAchievementsDetails}>{aboutCard.details}</div>
                    </div>
                ))}
            </div>
            <div className={styles.aboutExperts}></div>
            <div className={styles.aboutServices}></div>
        </div>
    )
}

export default About;




