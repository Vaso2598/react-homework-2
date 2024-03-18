import "./App.css";
import Aside from "./layout/Header/Aside";
import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Library from "./pages/Library";
import Search from "./pages/Search";
import {nav} from "./data/nav";
import {artistData} from "./data/artistData";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {artistsYouMayLike} from "./data/artistsYouMayLike";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/search",
		element: <Search />,
	},
	{
		path: "/artists",
		element: <Artists />,
	},
	{
		path: "/library",
		element: <Library />,
	},
]);

function App() {
	return (
		<div className="mx-4 flex flex-row gap-4">
			<header className="flex flex-col min-w-52">
				<Header navigation={nav} />
				<Aside artistData={artistData} />
			</header>
			<RouterProvider router={router} className="w-auto" />
		</div>
	);
}

export default App;
