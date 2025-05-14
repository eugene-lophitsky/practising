import Jumbotron from '../About/Jumbotron/Jumbotron.jsx';
import Achievements from './Achievements/Achievements.jsx';
import Experts from './Experts/Experts.jsx';
import Featured from '../About/Featured/Featured.jsx';
import Footer from './Footer/Footer.jsx';
import styles from './About.module.css';

function About () {
    return (
        <div className={styles.about}>
            <Jumbotron/>
            <Achievements/>
            <Experts/>
            <Featured/>
            <Footer/>
            <div className={styles.aboutServices}></div>
        </div>
    )
}

export default About;




