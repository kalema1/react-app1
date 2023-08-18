import Logo from "../Logo/Logo";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-grid-item">
                        <div className="footer-logo-box"><Logo /></div>
                        <p className="sec-para"><a className="footer-link" href="#">1920 holden Street Sn Diego, CA 9389</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Call Us: 1-800-323-3829</a></p>
                        <div className="footer-icon-box">
                            <IoLogoFacebook className="footer-icon" />
                            <IoLogoTwitter className="footer-icon" />
                            <IoLogoInstagram className="footer-icon" />
                        </div>
                    </div>
                    <div className="footer-grid-item2">
                        <div className="footer-hdg-box"><p className="footer-hdg-para">Take a Tour</p></div>
                        <p className="sec-para"><a className="footer-link" href="#">Features</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Pricing</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Product</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Support</a></p>
                        
                    </div>
                    <div className="footer-grid-item3">
                    <div className="footer-hdg-box"><p className="footer-hdg-para">Our Company</p></div>
                        <p className="sec-para"><a className="footer-link" href="#">About Us</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Blog</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Media</a></p>
                        <p className="sec-para"><a className="footer-link" href="#">Contant Us</a></p>
                    
                    </div>
                    <div className="footer-grid-item4">
                        <div className="footer-hdg-box"><p className="footer-hdg-para">Subscribe</p></div>
                        <p className="sec-para"><a className="footer-link" href="#">Subscribe to get the latest news from us</a></p>
                        <div className="footer-subscribe-box">
                            <input className="footer-input" type="text" placeholder="Email Address" />
                            <div className="footer-subcribe-icon-box"><IoArrowForwardOutline className="footer-subcribe-icon" /></div>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-copyright-box"><p className="footer-hdg-para">Copyright © 2021. Crafted with love</p></div>
            </div>
        </footer>
    )
}