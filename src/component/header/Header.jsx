import Nav from "./Nav";
import Search from "./Search";
import logo from "../../picture/logo.png";

export default function Header() {
	return (
		<navigation id="masthead" className="header">
			<div className="logo">
				<a href="#" title="Hex download">
					<img src={logo}></img>
				</a>
			</div>
			<>
				<Nav />
			</>
			<>
				<Search />
			</>
		</navigation>
	);
}
