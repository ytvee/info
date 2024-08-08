import * as React from "react";
import { socialLinks } from "./meta";
import "./style.css";

const AppFooter = () => {
    return (
        <footer className="footer-container">
            <div className="footer-information">© 2024</div>
            <div className="footer-links-container">
                {socialLinks.map((link) => (
                    <div id={link.link} className="footer-links">
                        <a href={link.link} target="_blank">
                            {link.label}
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default AppFooter;
