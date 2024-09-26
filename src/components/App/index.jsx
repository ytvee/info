import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import MainRouter from "../../router";
import "../../domains/Theme/style.css";
import "./style.css";

// TODO: добавить фавикон
// TODO: настроить seo
// TODO: блог

const App = () => {
    const appTheme = useSelector((state) => state.application.currentTheme);

    return (
        <div className={`app ${appTheme}`}>
            <RouterProvider router={MainRouter} />
        </div>
    );
};

export default App;
