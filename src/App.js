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
		<div className="p-4 flex flex-row gap-4 bg-black h-screen">
			<header className="flex flex-col min-w-52 gap-4">
				<Header navigation={nav} />
				<Aside artistData={artistData} />
			</header>
			<RouterProvider router={router} className="w-auto h-full" />
		</div>
	);
}

export default App;
