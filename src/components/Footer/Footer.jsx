import "./Footer.css"
import {FaLinkedin,FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si";

export default function Footer() {

    return(
        <main>
            <div className="footer">
                <div className="footer-container">
                <div className="social-icons-container">
                <a href= "https:www.linkedin.com/in/winnie-imafidon-097307a7" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icons"/></a>
                <a href= "https://github.com/Winnie101995" target="_blank" rel="noopener noreferrer" ><FaGithub className="social-icons" /> </a>
                <a href="mailto:w.o.imafidon@gmail.com"><SiGmail className="social-icons"/> </a>

            </div>
                </div>
            </div>
        </main>
    )

}
