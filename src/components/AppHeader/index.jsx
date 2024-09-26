import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch";
import { paths } from "../../router/meta";
import "./style.css";

// TODO: fix hamburger active:animation
// TODO: add transition to show extended menu

const AppHeader = () => {
    const pathList = Object.values(paths);
    const pages = pathList.slice(1, pathList.length - 1);
    const [isMenuExtended, setIsMenuExtended] = useState(false);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuExtended(!isMenuExtended);
        document.addEventListener("click", closeMenu);
    };

    const closeMenu = () => {
        setIsMenuExtended(false);
        document.removeEventListener("click", closeMenu);
    }

    const HamburgerMenu = () => {
        return (
            <div className={`hamburger ${isMenuExtended ? "extended" : ""}`} onClick={toggleMenu}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
        );
    };

    const ExtendedMenu = () => {
        return (
            <div className={`extended-menu-container ${isMenuExtended ? "show" : "hide"}`}>
                <ul className="extended-nav">
                    {pages.map((page) => (
                        <li className="extended-nav-item" key={page.id}>
                            <Link to={`${page.path}`} className="extended-nav-link" onClick={toggleMenu}>
                                {page.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeSwitch />
            </div>
        );
    };

    return (
        <header className="header" id="header">
            <div className="logo-container">
                <Link to={paths.HOME.path} className="logo-link">
                    YT VEE
                </Link>
            </div>
            <ul className="nav-container">
                {pages.map((page) => (
                    <li className="nav-item" key={page.id}>
                        <Link to={`${page.path}`} className="nav-item-link">
                            {page.label}
                        </Link>
                    </li>
                ))}
                <ThemeSwitch />
            </ul>
            <HamburgerMenu />
            {isMenuExtended && <ExtendedMenu />}
        </header>
    );
};

export default AppHeader;
