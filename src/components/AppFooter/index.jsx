import * as React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { Link } from "gatsby";
import { pages } from "./meta";
import { socialLinks } from "./meta";
import "./style.css";

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
