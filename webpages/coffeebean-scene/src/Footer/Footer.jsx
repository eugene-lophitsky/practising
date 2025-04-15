import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";

function Footer () {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer-common">
                    <div className="footer-common__logo">Bean Scene</div>
                    <div className="footer-common__description">
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem
                     Ipsum has been the industry&apos;s standard 
                     dummy text ever since the 1500s, when 
                     an unknown printer took a galley of 
                     type and scrambled it to make a type
                      specimen book.
                    </div>
                    <div className="footer-common__social">
                        <a href="#" className="footer-common__social-link">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#" className="footer-common__social-link">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="#" className="footer-common__social-link">
                            <img src={youtube} alt="" />
                        </a>
                        <a href="#" className="footer-common__social-link">
                            <img src={twitter} alt="" />
                        </a>
                       
                    </div>
                </div>

                <div className="footer-links">
                    
                </div>

            </div>
        </div>
    )
}

export default Footer;