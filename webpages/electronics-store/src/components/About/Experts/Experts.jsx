import styles from './Experts.module.css';

function Experts () {
  return (
    <div className={styles.experts}>
        <div color={styles.expertsList}>
            <div className={styles.expertsListCard}></div>
        </div>
    </div>
  )
}

export default Experts;