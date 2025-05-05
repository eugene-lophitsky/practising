import styles from '../Footer/Footer.module.css';
import iconSend from '/icon-send.svg';

function Footer () {
  return (
    <div className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.footerCommon}>

                <div className={styles.footerFeedback}>
                    <div className={styles.footerFeedbackTitle}>Exclusive</div>
                    <div className={styles.footerFeedbackLink}>Subscribe</div>
                    <div className={styles.footerFeedbackOffer}>Get 10% off your first order</div>
                    <form action="" className={styles.footerFeedbackForm}>
                        <input type="text" className={styles.footerFeedbackFormInput}/>
                        <a className={styles.footerFeedbackFormButton}>
                            <img src={iconSend} alt="" />
                        </a>
                    </form>
                </div>

                <div className={styles.footerLinks}></div>
                <div className={styles.footerApps}></div>
            </div>
            <div className={styles.footerCopyright}>
            &#169 Copyright Rimel 2025. All right reserved
            </div>
        </div>
    </div>
  )
}

export default Footer;