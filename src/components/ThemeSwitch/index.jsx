import * as React from "react";
import spriteList from "../../assets/Sprites";
import "./style.css";

export const theme = {
    KEY: "theme",
    LIGHT: "light",
    DARK: "dark",
};

const ThemeSwitch = ({ appTheme, setAppTheme }) => {
    const themeToggle = () => {
        if (appTheme === theme.LIGHT) {
            window.localStorage.setItem(theme.KEY, theme.DARK);
            return setAppTheme(theme.DARK);
        }
        window.localStorage.setItem(theme.KEY, theme.LIGHT);
        return setAppTheme(theme.LIGHT);
    };

    return (
        <div
            class={`toggle-switch ${appTheme}-container`}
            onClick={themeToggle}
        >
            <div className={`toggle ${appTheme}`}></div>
            {spriteList.moon}
            {spriteList.sun}
        </div>
    );
};

export default ThemeSwitch;
