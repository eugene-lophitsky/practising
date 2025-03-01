import React from "react";
import "./Footer.css";
import { useCurrentDate } from "@kundinos/react-hooks";

function CurrentYear() {
  const currentDate = useCurrentDate();
  const fullYear = currentDate.getFullYear();
  return (
    <>
      { `2018 - ${fullYear}`}
    </>
  );
}

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer-wrap">
            <div className="footer-content">
              <div className="footer-content__copyright">
                <span className="footer-content__signature">&#169; </span>ООО
                <span className="footer-logo__part">«Мой</span>
                <span>Маркет»,&nbsp;<CurrentYear/>.</span>
              </div>
              <span className="footer-content__text">
                Для уточнения информации звоните по номеру&nbsp;
                <a className="footer-content__link" href="tel:+79000000000">
                  +7 900 000 0000
                </a>
                ,
              </span>
              <span className="footer-content__text">
                а предложения по сотрудничеству отправляйте на почту
                <a
                  className="footer-content__link"
                  href="mailto:partner@mymarket.com"
                >
                  &nbsp;partner@mymarket.com
                </a>
              </span>
            </div>
            <span className="footer-jump-to-up">
              <a className="scroll-to-top" href="#scroll-up">
                Наверх
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
