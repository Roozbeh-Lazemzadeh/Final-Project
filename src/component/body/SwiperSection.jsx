import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { apikey, baseUrl, imgBaseURL, posterImg } from "../../apiConfig";
import { useEffect, useState } from "react";
import axios from "axios";
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
					slidesPerView: 5,
					spaceBetween: 10,
				},
			}}
		>
			{movies.map((item) => (
				<SwiperSlide key={item.id}>
					<div className="item">
						<a href={"#"}>
							<img
								src={posterImg(item.poster_path)}
								alt={item.title}
								className="spimg"
							/>
						</a>
						<div className="name">{item.title}</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
