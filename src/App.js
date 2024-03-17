import "./App.css";
import Aside from "./layout/Header/Aside";
import Header from "./layout/Header/Header";
import Artists from "./pages/Artists";
import Library from "./pages/Library";
import Search from "./pages/Search";
import {nav} from "./data/nav";
import {artistData} from "./data/artistData";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		// element: <App />,
		element: <h1>Home</h1>,
	},
	{
		path: "/search",
		element: <Search />,
		element: <h1>Search</h1>,
	},
	{
		path: "/artists",
		element: <Artists />,
		element: <h1>Artists</h1>,
	},
	{
		path: "/library",
		element: <Library />,
		element: <h1>Your Library</h1>,
	},
]);

function App() {
	return (
		<>
			<Header navigation={nav} />
			<Aside artistData={artistData} />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
