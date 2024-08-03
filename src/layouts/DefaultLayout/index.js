import * as React from "react";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import "./style.css";

const DefaultLayout = ({ children }) => {
    const [appTheme, setAppTheme] = React.useState("light");

    return (
        <div className={`container ${appTheme}`}>
            <AppHeader setAppTheme={setAppTheme} />
            <div className="default-layout">{children}</div>
            <AppFooter />
        </div>
    );
};

export default DefaultLayout;
