import React from "react";
import { socialLinks } from "../../utils/constants";
import "./style.css";

//TODO: вместо 2024 нужна функция получения сегодняшнего года
//TODO: добавить состояние картинки на странице об авторе в local storage

const AppFooter = () => {
    return (
        <footer className="footer-container">
            {/* <div className="footer-information">© 2024</div> */}
            <div className="footer-links-container">
                <span className="footer-links">© 2024</span>
                {socialLinks.map((link) => (
                    <div className="footer-links" key={link.link}>
                        <a href={link.link} target="_blank" rel="noreferrer">
                            {link.label}
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default AppFooter;
