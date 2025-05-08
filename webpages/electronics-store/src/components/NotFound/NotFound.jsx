import styles from './NotFound.module.css';

function NotFound () {
  return (
    <div className={styles.notFound}>
        <div className={styles.notFoundMain}>
            <div className={styles.notFoundMainTitle}>404 Not Found</div>
            <div className={styles.notFoundMainMessage}>Your visited page not found. You may go home page.</div>
            <a href="#" className={styles.notFoundMainButton}>Back to home page</a>
        </div>
        <div className={styles.notFoundFooter}></div>
    </div>
  )
}

export default NotFound;