import * as React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import "./style.css";

const DefaultLayout = ({ children }) => {
    const themeFromLocalStorage = window.localStorage.getItem("theme");
    const [appTheme, setAppTheme] = React.useState(
        themeFromLocalStorage || "light"
    );

    return (
        <div className={`container ${appTheme}`}>
            <AppHeader setAppTheme={setAppTheme} />
            <div className="default-layout">{children}</div>
            <AppFooter />
        </div>
    );
};

export default DefaultLayout;
