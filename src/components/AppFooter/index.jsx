import * as React from "react";
import { socialLinks } from "./meta";
import "./style.css";

//TODO: почистить проект

const AppFooter = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-information">© 2024</div>
                {socialLinks.map((link) => (
                    <div className="footer-links">
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
