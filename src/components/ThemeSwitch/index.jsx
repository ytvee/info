import * as React from "react";
import spriteList from "../../assets/Sprites";
import "./style.css";

const ThemeSwitch = ({setAppTheme}) => {
    const [currentTheme, setCurrentTheme] = React.useState("light");

    const themeToggle = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
            return setAppTheme("dark");
        }
        setCurrentTheme("light");
        return setAppTheme("light");
    }

    return (
        <div class={`toggle-switch ${currentTheme}-container`} onClick={themeToggle}>
            <div className={`toggle ${currentTheme}`}></div>
            {spriteList.sun}
            {spriteList.moon}
        </div>
    );
};

export default ThemeSwitch;
