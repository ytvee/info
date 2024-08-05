import * as React from "react";
import spriteList from "../../assets/Sprites";
import "./style.css";

const ThemeSwitch = ({ setAppTheme }) => {
    const themeFromLocalStorage = window.localStorage.getItem("theme");
    const [currentTheme, setCurrentTheme] = React.useState(
        themeFromLocalStorage || "light"
    );

    const themeToggle = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
            window.localStorage.setItem("theme", "dark");
            return setAppTheme("dark");
        }
        setCurrentTheme("light");
        window.localStorage.setItem("theme", "light");
        return setAppTheme("light");
    };

    return (
        <div
            class={`toggle-switch ${currentTheme}-container`}
            onClick={themeToggle}
        >
            <div className={`toggle ${currentTheme}`}></div>
            {spriteList.sun}
            {spriteList.moon}
        </div>
    );
};

export default ThemeSwitch;
