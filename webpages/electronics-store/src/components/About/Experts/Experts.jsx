import styles from './Experts.module.css';
import expertsCards from './experts.js';
import twitter from '/icon_twitter_small.svg';
import instagram from '/icon_instagram_small.svg';
import linkedin from '/icon_linkedin_small.svg';

function Experts () {
  return (
    <div className={styles.experts}>
           {expertsCards.map(card => (
            <div key={card.name} className={styles.expertsCard}>
                <div className={styles.expertsCardImageWrapper}>
                    <img src={card.image} className={styles.expertsCardImage} alt="" />
                </div>
                <span className={styles.expertsCardName}>{card.name}</span>
                <span className={styles.expertsCardOccupation}>{card.occupation}</span>
                <div className={styles.expertsCardSocial}>
                  <a href="#"><img src={twitter} alt="" /></a>
                  <a href="#"><img src={instagram} alt="" /></a> 
                  <a href="#"><img src={linkedin} alt="" /></a>
              </div>
            </div>
           ))}

    </div>
  )
}

export default Experts;