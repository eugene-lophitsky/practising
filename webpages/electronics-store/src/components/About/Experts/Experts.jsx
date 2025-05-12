import styles from './Experts.module.css';
import expertsCards from './experts';

function Experts () {
  return (
    <div className={styles.experts}>
        <div color={styles.expertsList}>
           {expertsCards.map(card => (
        <div key={card.name} className={styles.expertsCards}>
          <div className={styles.expertsCardsImage}>
            <img src={card.image} alt="" />
          </div>
          <span className={styles.expertsCardsName}>{card.name}</span>
          <span className={styles.expertsCardsOccupation}>{card.occupation}</span>
          <div className={styles.expertsCardsSocial}>
            <img src={card.social.twitter} alt="" />
            <img src={card.social.instagram} alt="" />
            <img src={card.social.twitter} alt="" />
          </div>
        </div>
           ))}
        </div>
    </div>
  )
}

export default Experts;


 