import { NavLink } from "react-router-dom";
import LiExtension from "./LiExtension";

export default function () {
	const films = [
		{ id: 1, film: "Popular" },
		{ id: 2, film: "Now Playing" },
		{ id: 3, film: "Upcoming" },
		{ id: 4, film: "Top Rated" },
	];
	const serials = [
		{ id: 1, serial: "Popular" },
		{ id: 2, serial: "Airing Today" },
		{ id: 3, serial: "On TV" },
		{ id: 4, serial: "Top Rated" },
	];
	const people = [{ id: 1, people: "Popular People" }];
	return (
		<nav className="navigate">
			<ul>
				<li>
					<NavLink to="/">Hex download</NavLink>
				</li>
				<li>
					<a href="#" className="navAnchor">
						Movies
					</a>
					<ul className="UlExtension">
						{films.map((item) => (
							<LiExtension film={item.film} key={item.id} />
						))}
					</ul>
				</li>
				<li>
					<a href="#" className="navAnchor">
						TV Shows
					</a>
					<ul className="UlExtension">
						{serials.map((item) => (
							<LiExtension serial={item.serial} key={item.id} />
						))}
					</ul>
				</li>
				<li>
					<a href="#" className="navAnchor">
						People
					</a>
					<ul className="UlExtension">
						{people.map((item) => (
							<LiExtension people={item.people} key={item.id} />
						))}
					</ul>
				</li>
			</ul>
		</nav>
	);
}
