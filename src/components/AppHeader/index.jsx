import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch";
import { paths } from "../../router/meta";
import "./style.css";

const HamburgerMenu = () => {
    return (
        <div className="hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    );
};

const AppHeader = () => {
    const pathList = Object.values(paths);
    const pages = pathList.slice(1, pathList.length - 1);

    return (
        <header className="header" id="header">
            <div className={`logo-container`}>
                <Link to={paths.HOME.path} className="logo-link">
                    YT VEE
                </Link>
            </div>
            <ul className="nav-container">
                {pages.map((page) => (
                    <li className={`nav-item`} key={page.id}>
                        <Link to={`${page.path}`} className={`nav-item-link`}>
                            {page.label}
                        </Link>
                    </li>
                ))}
                <ThemeSwitch />
            </ul>
            <HamburgerMenu />
        </header>
    );
};

export default AppHeader;
