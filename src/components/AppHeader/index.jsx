import * as React from "react";
import ThemeSwitch from "../ThemeSwitch";
import { Link } from "gatsby";
import "./style.css";

const pages = [
    {
        id: "",
        label: "Блог",
    },
    {
        id: "projects",
        label: "Проекты",

    },
    {
        id: "about",
        label: "Об авторе",

    },
    {
        id: "contacts",
        label: "Контакты и медиа",

    },
];

const AppHeader = () => {
    return (
        <div className="header">
            <div className={`logo-container`} >YT VEE</div>
            <div className="nav-container">
                {pages.map((page) => (
                    <Link to={`/${page.id}`} className="nav-item">{page.label}</Link>
                ))}
                <ThemeSwitch />
            </div>
        </div>
    );
};

export default AppHeader;
