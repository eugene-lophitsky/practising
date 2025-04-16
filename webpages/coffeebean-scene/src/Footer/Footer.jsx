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

                <div className="footer__navigation">
                    <div className="footer__navigation-links">
                        <div className="footer__navigation-title">About</div>
                        <a href="#" className="footer__navigation-link">Menu</a>
                        <a href="#" className="footer__navigation-link">Features</a>
                        <a href="#" className="footer__navigation-link">News & Blogs</a>
                        <a href="#" className="footer__navigation-link">Help & Supports</a>
                    </div>
                    <div className="footer__navigation-links">
                        <div className="footer__navigation-title">Company</div>
                        <a href="#" className="footer__navigation-link">How we work</a>
                        <a href="#" className="footer__navigation-link">Terms of service</a>
                        <a href="#" className="footer__navigation-link">Pricing</a>
                        <a href="#" className="footer__navigation-link">FAQ</a>
                    </div>
                </div>

                <div className="footer-contacts">
                    <div className="footer-contacts__title"></div>
                    <div className="footer-contacts__address"></div>
                    <div className="footer-contacts__communication">
                       <a href="tel:+1 202-918-2132" className="footer-contacts__communication-item">+1 202-918-2132</a>
                       <a href="mailto: beanscene@mail.com" className="footer-contacts__communication-item">beanscene@mail.com</a>
                       <a href="http://www.beanscene.com" className="footer-contacts__communication-item">www.beanscene.com</a> 
                    </div>
                </div>    

            </div>
        </div>
    )
}

export default Footer;