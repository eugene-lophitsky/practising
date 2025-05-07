import styles from './Contacts.module.css';
import phone from '/icons-phone.webp';
import email from '/icons-mail.webp';

function Contacts () {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsCommunications}>

                <div className={styles.contactsCommunication}>
                    <div className={styles.contactsCommunicationsCaption}><img src={phone} alt="" />
                        <span className={styles.contactsCommunicationTitle}>Call To Us</span>
                    </div>
                    <div className={styles.contactsCommunicationDetails}>We are available 24/7, 7 days a week.</div>
                        <div className={styles.contactsCommunicationTouch}>Phone: +8801611112222</div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.contactsCommunication}>
                    <div className={styles.contactsCommunicationsCaption}><img src={email} alt="" />
                        <span className={styles.contactsCommunicationTitle}>Write To US</span>
                    </div>
                    <div className={styles.contactsCommunicationDetails}>Fill out our form and we will contact <br />you within 24 hours.</div>
                    <div className={styles.contactsCommunicationTouch}>Emails: customer@exclusive.com</div>
                </div>

            </div>

            <div className={styles.contactsFeedbackForm}>
                <form>
                    <input type="text" placeholder="Your Name *" /><input type="text" placeholder="Your Email *" /><input type="text" placeholder="Your Phone *" /><br />
                    <textarea name="" id="" placeholder="Your Message"></textarea>
                </form>
            </div>
        </div>
    )
}

export default Contacts;