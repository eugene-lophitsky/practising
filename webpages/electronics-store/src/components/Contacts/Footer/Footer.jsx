import styles from '../Footer/Footer.module.css';
import iconSend from '/icon-send.svg';
import qr from '/qr-code.svg';
import googlePlay from '/google-play.webp';
import appStore from '/appstore.webp';
import facebook from '/icon_facebook.svg';
import twitter from '/icon_twitter.svg';
import instagram from '/icon_instagram.svg';
import linkedin from '/icon_linkedin.svg';

function Footer () {

  return (
    <div className={styles.footer}>
     <div className={styles.footerWrapper}>
        <div className={styles.footerCommon}>
            <div className={styles.footerFeedback}>
                <div className={styles.footerFeedbackTitle}>Exclusive</div>
                <a href="#" className={styles.footerFeedbackLink}>Subscribe</a>
                <div className={styles.footerFeedbackOffer}>Get 10% off your first order</div>
                <form action="" className={styles.footerFeedbackForm}>
                    <input type="text" className={styles.footerFeedbackFormInput} placeholder="Enter your email" />
                    <a href="#" className={styles.footerFeedbackFormButton}>
                        <img src={iconSend} alt="" /></a>
                </form>
            </div>
            <div className={styles.footerLinks}>
                <div className={styles.footerLinksSet}>
                    <div className={styles.footerLinksSetTitle}>Support</div>
                    <div className={styles.footerLinksSetAddress}>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</div>
                    <a href="mailto: exclusive@gmail.com" className={styles.footerLink}>exclusive@gmail.com</a>
                    <a href="tel: +88015-88888-9999" className={styles.footerLink}>+88015-88888-9999</a>
                </div>
                <div className={styles.footerLinksSet}>
                    <div className={styles.footerLinksSetTitle}>Account</div>
                    <a href="#" className={styles.footerLink}>My Account</a>
                    <a href="#" className={styles.footerLink}>Login / Register</a>
                    <a href="#" className={styles.footerLink}>Cart</a>
                    <a href="#" className={styles.footerLink}>Wishlist</a>
                    <a href="#" className={styles.footerLink}>Shop</a>
                </div>
                <div className={styles.footerLinksSet}>
                    <div className={styles.footerLinksSetTitle}>Quick Link</div>
                    <a href="#" className={styles.footerLink}>Privacy Policy</a>
                    <a href="#" className={styles.footerLink}>Terms Of Use</a>
                    <a href="#" className={styles.footerLink}>FAQ</a>
                    <a href="#" className={styles.footerLink}>Contact</a>
                </div>
            </div>
            <div className={styles.footerApps}>
                <div className={styles.footerAppsTitle}>Download App</div>
                <div className={styles.footerAppsOffer}>Save $3 with App New User Only</div>
                <div className={styles.footerAppsStores}>
                    <div className={styles.footerAppsScan}>
                        <img src={qr} alt="" />
                    </div>
                    <div className={styles.footerAppsDownload}>
                        <div>
                            <img src={googlePlay} alt="" className={styles.footerAppsDownloadIcon}/>
                        </div>
                        <div>
                            <img src={appStore} alt="" className={styles.footerAppsDownloadIcon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.footerAppsSocial}>
                    <a href="#"><img src={facebook} alt=""/></a>
                    <a href="#"><img src={twitter} alt=""/></a>
                    <a href="#"><img src={instagram} alt=""/></a>
                    <a href="#"><img src={linkedin} alt=""/></a>
                </div>

            </div>
        </div>
        <div className={styles.divider}></div>    
    </div>

    <div className={styles.footerCopyright}>
        &copy; Copyright Rimel 2025. All right reserved
        </div>
</div>
  )
}

export default Footer;