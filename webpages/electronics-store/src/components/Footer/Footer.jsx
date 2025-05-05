import styles from '../Footer/Footer.module.css';

function Footer () {
  return (
    <div className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.footerCommon}>
                <div className={styles.footerFeedback}></div>
                <div className={styles.footerLinks}></div>
                <div className={styles.footerApps}></div>
            </div>
            <div className={styles.footerCopyright}></div>
        </div>
    </div>
  )
}

export default Footer;