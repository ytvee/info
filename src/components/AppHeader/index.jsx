import * as React from "react";
import { Link } from "gatsby";
import ThemeSwitch from "../ThemeSwitch";
import { pages } from "./meta";
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

const AppHeader = ({ appTheme, setAppTheme }) => {
    return (
        <header className="header">
            <div className={`logo-container`}>
                <Link to={pages[0].path} className="logo-link">
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
                <ThemeSwitch appTheme={appTheme} setAppTheme={setAppTheme} />
            </ul>
            <HamburgerMenu />
        </header>
    );
};

export default AppHeader;
