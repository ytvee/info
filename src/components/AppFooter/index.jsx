import React from "react";
import { socialLinks } from "../../utils/constants";
import "./style.css";

//TODO: вместо 2024 нужна функция получения сегодняшнего года

const AppFooter = () => {
    return (
        <footer className="footer-container">
            <div className="footer-information">© 2024</div>
            <div className="footer-links-container">
                {socialLinks.map((link) => (
                    <div className="footer-links" key={link.link}>
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
