import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { apikey, baseUrl, imgBaseURL, posterImg } from "../../apiConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SectionHeader from "./SectionHeader";

export default function SwiperSection() {
	const [mediaType, setMediaType] = useState("movie");
	const [movies, setMovies] = useState([]);
	let categorie;
	if (mediaType == "movie") {
		categorie = "movie";
	} else if (mediaType == "tv") {
		categorie = "tv";
	}

	async function getPopularMovies() {
		try {
			const { data } = await axios.get(
				`${baseUrl}/${categorie}/popular?api_key=${apikey}`
			);

			setMovies(data.results);
			console.log(data.results);
		} catch {
			console.log("ERRRROR");
		}
	}
	useEffect(() => {
		getPopularMovies();
	}, [categorie]);

	return (
		<>
			<SectionHeader
				textH3={"Free To Watch"}
				mediaType={mediaType}
				setMediaType={setMediaType}
			/>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={15}
				slidesPerView={2}
				loop={true}
				autoplay={{ delay: 2000 }}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					1024: {
						slidesPerView: 8,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					480: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
				}}
			>
				{movies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<NavLink to={`/${categorie}/${movie.id}`}>
							<div className="item">
								<img
									src={posterImg(movie.poster_path)}
									alt={movie.title}
									className="img"
								/>

								<div className="name">{movie.title}</div>
							</div>
						</NavLink>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
