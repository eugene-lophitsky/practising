import styles from '../Jumbotron/Jumbotron.module.css';
import jumbotronPhoto from '/about-us-jumbotron.webp';

function Jumbotron () {
  return (
               <div className={styles.aboutJumbotron}>
                <div className={styles.aboutJumbotronDescription}>
                   <div className={styles.aboutJumbotronWrapper}>
                        <div className={styles.aboutJumbotronDescriptionTitle}>Our Story</div>
                        <div className={styles.aboutJumbotronDescriptionText}>
                            <p className={styles.aboutJumbotronDescriptionSection}>
                            Launced in 2015, Exclusive is South Asia’s premier
                            online shopping makterplace with an active presense
                            in Bangladesh. Supported by wide range of tailored 
                            marketing, data and service solutions, Exclusive 
                            has 10,500 sallers and 300 brands and serves 3 
                            millioons customers across the region.
                            </p>
                            <p className={styles.aboutJumbotronDescriptionSection}>
                            Exclusive has more than 1 Million products to offer,
                            growing at a very fast. Exclusive offers a diverse 
                            assotment in categories ranging  from consumer.
                            </p> 
                        </div>
                    </div>
                </div>
                <div className={styles.aboutJumbotronImageWrapper}>
                    <img src={jumbotronPhoto} className={styles.aboutJumbotronImage} alt="" />
                </div>
            </div>
  )
}

export default Jumbotron;