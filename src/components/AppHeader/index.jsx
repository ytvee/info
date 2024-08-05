import * as React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { Link } from "gatsby";
import { pages } from "./meta";
import "./style.css";

const AppHeader = ({ appTheme, setAppTheme }) => {
    return (
        <header className="header">
            <div className={`logo-container`}>YT VEE</div>
            <ul className="nav-container">
                {pages.map((page) => (
                    <li className={`nav-item`} key={page.id}>
                        <Link to={`/${page.path}`} className={`nav-item-link`}>
                            {page.label}
                        </Link>
                    </li>
                ))}
                <ThemeSwitch appTheme={appTheme} setAppTheme={setAppTheme} />
            </ul>
        </header>
    );
};

export default AppHeader;
