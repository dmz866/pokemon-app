import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
	{ path: "/", element: <Home />, },
	{ path: "*", element: <NotFound />, },
]);