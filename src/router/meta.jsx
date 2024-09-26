// import Landing from "../pages/Landing";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";

export const paths = {
	HOME: {
		id: "Landing",
		path: "/",
        label: "Главная",
	},
	BLOG: {
		id: "Blog",
		path: "/blog",
        label: "Блог",
	},
	ABOUT: {
		id: "About",
        path: "/about",
        label: "Об авторе",
	},
    CONTACTS_MEDIA: {
		id: "ContactsMedia",
        path: "/contacts-media",
        label: "Связь и медиа",
	},
    NOT_FOUND: {
		id: "notFound",
        path: "*",
        label: "notFound",
	},
    
}

const routes = [
    {
        ...paths.HOME,
        element: <About />,
    },
    // {
    //     ...paths.HOME,
    //     element: <Landing />,
    // },
    
    {
        ...paths.BLOG,
        element: <Blog />,
    },
    {
        ...paths.ABOUT,
        element: <About />,
    },
    {
        ...paths.CONTACTS_MEDIA,
        element: <Contacts />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFound />,
    },
    
];

export default routes;
