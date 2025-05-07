import styles from './Contacts.module.css';

function Contacts () {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsCommunications}>
                <div className={styles.contactsCommunicationsPhone}></div>
                <div className={styles.contactsCommunicationsEmail}></div>
            </div>
            <div className={styles.contactsFeedbackForm}></div>
        </div>
    )
}

export default Contacts;