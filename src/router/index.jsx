import { createBrowserRouter } from "react-router-dom";
import routes from "./meta";

const MainRouter = createBrowserRouter(routes, {
    basename: "/info",
});

export default MainRouter;
