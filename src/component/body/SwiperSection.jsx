import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { apikey, baseUrl, imgBaseURL, posterImg } from "../../apiConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SectionHeader from "./SectionHeader";

export default function SwiperSection() {
	const [movies, setMovies] = useState([]);

	async function getPopularMovies() {
		try {
			const { data } = await axios.get(
				`${baseUrl}/movie/popular?api_key=${apikey}`
			);

			setMovies(data.results);
			console.log(data.results);
		} catch {
			console.log("ERRRROR");
		}
	}
	useEffect(() => {
		getPopularMovies();
	}, []);

	return (
		<>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={15}
				slidesPerView={2}
				loop={true}
				autoplay={{ delay: 4000 }}
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
						<NavLink to={`/movie/${movie.id}`}>
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
