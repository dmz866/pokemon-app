import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { PokemonInformation } from "../components/Pokemon/PokemonInformation";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
	{ path: "/", element: <Home />, },
	{ path: "/pokemon/:id", element: <PokemonInformation />, },
	{ path: "*", element: <NotFound />, },
]);