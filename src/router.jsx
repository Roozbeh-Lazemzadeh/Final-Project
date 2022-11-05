import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/component/Layout";
import Home from "./component/pages/Home";
import Movies from "./component/pages/Movies";
import Movie from "./component/pages/Movie";
import LogIn from "./component/pages/LogIn";
import App from "./App";
import Header from "./component/header/Header";
import SectionHeader from "./component/body/SectionHeader";
import SignIn from "./component/form/SignIn";
import Footer from "./component/Footer/Footer";

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: (
					<>
						<Header />
						<SectionHeader textH3={"کالکشن"} textdiv={"مشاهده همه"} />
						<Home />
						<Footer />
					</>
				),
			},
			{
				path: "/login",
				element: (
					<>
						<SignIn />
					</>
				),
			},
			{
				path: "/:media_type/:movieId",
				element: (
					<>
						<Movie />
					</>
				),
			},
		],
	},

	// { path: "/", element: <Home /> },
	// {
	// 	path: "/movies",
	// 	element: <Movies />,
	// },
	// {
	// 	path: "/movies/:movieId",
	// 	element: <Movie />,
	// },
	// {
	// 	path: "/login",
	// 	element: <LogIn />,
	// },
]);
