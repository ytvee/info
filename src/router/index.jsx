import { createBrowserRouter } from "react-router-dom";
import routes from "./meta";

const MainRouter = createBrowserRouter(routes, {
    basename: "/yt-blog",
});

export default MainRouter;
