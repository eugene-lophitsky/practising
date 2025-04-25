import JumbotronSlider from './JumbotronSlider.jsx';
import styles from '../Jumbotron/Jumbotron.module.css';

function Jumbotron () {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.jumbotronWrapper}>
                <div className={styles.jumbotronMenu}>
                    <a className={styles.jumbotronMenuLink} href="#">Woman’s Fashion</a>
                    <a className={styles.jumbotronMenuLink} href="#">Men’s Fashion</a>
                    <a className={styles.jumbotronMenuLink} href="#">Electronics</a>
                    <a className={styles.jumbotronMenuLink} href="#">Home & Lifestyle</a>
                    <a className={styles.jumbotronMenuLink} href="#">Medicine</a>
                    <a className={styles.jumbotronMenuLink} href="#">Sports & Outdoor</a>
                    <a className={styles.jumbotronMenuLink} href="#">Baby’s & Toys</a>
                    <a className={styles.jumbotronMenuLink} href="#">Groceries & Pets</a>
                    <a className={styles.jumbotronMenuLink} href="#">Health & Beauty</a>
                </div>
                <JumbotronSlider/>
            </div>
        </div>
    )
}

export default Jumbotron;