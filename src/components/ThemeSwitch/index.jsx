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
        typeof window !== "undefined" &&
            window.localStorage.setItem(theme.KEY, JSON.stringify(theme.LIGHT));

        if (appTheme === theme.LIGHT) {
            typeof window !== "undefined" &&
                window.localStorage.setItem(
                    theme.KEY,
                    JSON.stringify(theme.DARK)
                );
            return setAppTheme(theme.DARK);
        }
        return setAppTheme(theme.LIGHT);
    };

    return (
        <div
            className={`toggle-switch ${appTheme}-container`}
            onClick={themeToggle}
        >
            <div className={`toggle ${appTheme}`}></div>
            {spriteList.moon}
            {spriteList.sun}
        </div>
    );
};

export default ThemeSwitch;
