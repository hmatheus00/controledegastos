import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="footer" style={{display: "flex", justifyContent:"center" }}>
            <div className="footer__social">
                <a href="https://www.instagram.com/hmatheus00/" target="__blank">
                    <FaInstagram size="60" color="black"/>
                </a>
                <a href="https://www.linkedin.com/in/matheus-henrique-1785041a7/" target="__blank">
                    <FaLinkedin size="60" color="black"/>
                </a>
            </div>
            <p className="footer__copyright"></p>
        </footer>
    );

}