import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import MainPage from "../pages/Screen/mainPage"

export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/mainpage",
        element: <MainPage/>
    },
    {
        path: "*",
        element: <Error/>
    }

])