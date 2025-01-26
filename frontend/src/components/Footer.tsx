import React from "react";
//Need this to switch pages
//React Router Dom Updates
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer>
            <section className="footer__menu">
                <ul className="footer__list">
                    <li className="footer__item">
                        <Link to="/" className="footer__link">
                            Home
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="footer-blurb">
                <p className="footer-blurb-title">Kobe Tran's Grocery Store Tracker</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <Link to="/privacy-policy" className="privacy-policy-link">
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="footer__item">
                        <a 
                            href="https://github.com/devkobetran/grocery-prices-tracker-web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-blurb__link"
                        >
                            Kobe's GitHub Repo
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;