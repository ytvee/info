import * as React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { theme } from "../../components/ThemeSwitch";
import "./style.css";

const DefaultLayout = ({ children }) => {
    
    const themeFromLocalStorage = window.localStorage.getItem(theme.KEY);
    const [appTheme, setAppTheme] = React.useState(
        themeFromLocalStorage || theme.LIGHT
    );

    return (
        <div className={`container ${appTheme}`}>
            <AppHeader appTheme={appTheme} setAppTheme={setAppTheme} />
            <div className="default-layout">{children}</div>
            <AppFooter />
        </div>
    );
};

export default DefaultLayout;
