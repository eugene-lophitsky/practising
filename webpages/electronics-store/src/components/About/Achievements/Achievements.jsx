import styles from '../Achievements/Achievements.module.css';
import aboutCards from '../aboutCards.js';

function Achievements () {
  return (
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
  )
}

export default Achievements;