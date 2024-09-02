import * as React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { theme } from "../../components/ThemeSwitch";
import "./style.css";

const DefaultLayout = ({ children }) => {
    
        // typeof window !== "undefined" &&
        
    const [appTheme, setAppTheme] = React.useState(
        null
    );

    console.log("current theme from storage:", appTheme)

    React.useEffect(() => {
        const themeFromLocalStorage = typeof window !== "undefined" && window.localStorage.getItem(theme.KEY);
        if (themeFromLocalStorage) {
            setAppTheme(themeFromLocalStorage)
        }
    }, [appTheme])

    return (
        <div className={`container ${appTheme}`}>
            <AppHeader appTheme={appTheme} setAppTheme={setAppTheme} />
            <div className="default-layout">{children}</div>
            <AppFooter />
        </div>
    );
};

export default DefaultLayout;
