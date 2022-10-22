import Nav from "./Nav";
import Search from "./Search";

export default function Header() {
	return (
		<header id="masthead" className="header">
			<div className="logo">
				<a href="#" title="هکس دانلود">
					<img src="./src/picture/logo.png"></img>
				</a>
			</div>
			<>
				<Nav />
			</>
			<>
				<Search />
			</>
		</header>
	);
}
