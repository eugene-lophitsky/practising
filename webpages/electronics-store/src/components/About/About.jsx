import Jumbotron from '../About/Jumbotron/Jumbotron.jsx';
import styles from './About.module.css';
import aboutCards from './aboutCards.js';

function About () {
    return (
        <div className={styles.about}>
            <Jumbotron/>
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




