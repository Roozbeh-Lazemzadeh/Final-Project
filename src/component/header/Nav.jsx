import { NavLink } from "react-router-dom";

export default function () {
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
						<NavLink to="/movies/popular">
							<li>Popular</li>
						</NavLink>
						<NavLink to="/movies/now_playing">
							<li>Now Playing</li>
						</NavLink>
						<NavLink to="/movies/upcoming">
							<li>Upcoming</li>
						</NavLink>
						<NavLink to="/movies/top_rated">
							<li>Top Rated</li>
						</NavLink>
					</ul>
				</li>
				<li>
					<a href="#" className="navAnchor">
						TV Shows
					</a>
					<ul className="UlExtension">
						<li>Popular</li>
						<li>Airing Today</li>
						<li>On TV</li>
						<li>Top Rated</li>
					</ul>
				</li>
				<li>
					<a href="#" className="navAnchor">
						People
					</a>
					<ul className="UlExtension">
						<li>Popular People</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
