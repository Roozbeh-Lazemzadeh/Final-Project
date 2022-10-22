import LiExtension from "./LiExtension";

export default function () {
	const films = [
		{ id: 1, film: "فیلم ایرانی" },
		{ id: 2, film: "فیلم خارجی" },
		{ id: 3, film: "فیلم دوبله فارسی" },
		{ id: 4, film: "20 فیلم برتر" },
		{ id: 5, film: "کالکشن فیلم" },
	];
	const serials = [
		{ id: 1, serial: "سریال ایرانی " },
		{ id: 2, serial: "سریال خارجی " },
	];
	const animations = [
		{ id: 1, animation: "انیمیشن" },
		{ id: 2, animation: "انیمیشن سریالی" },
	];
	return (
		<nav className="navigat">
			<ul>
				<li>
					<a href="#">هکس دانلود</a>
				</li>
				<li>
					<a href="#" className="navAnchor">
						فیلم{" "}
					</a>
					<ul className="UlExtension">
						{films.map((item) => (
							<LiExtension film={item.film} key={item.id} />
						))}
					</ul>
				</li>
				<li>
					<a href="#" className="navAnchor">
						سریال{" "}
					</a>
					<ul className="UlExtension">
						{serials.map((item) => (
							<LiExtension serial={item.serial} key={item.id} />
						))}
					</ul>
				</li>
				<li>
					<a href="#" className="navAnchor">
						انیمیشن{" "}
					</a>
					<ul className="UlExtension">
						{animations.map((item) => (
							<LiExtension animation={item.animation} key={item.id} />
						))}
					</ul>
				</li>
			</ul>
		</nav>
	);
}
