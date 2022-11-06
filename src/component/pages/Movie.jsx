import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apikey, posterImg } from "../../apiConfig";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import "../../module/movie.css";

export default function Movie() {
	const [movie, setMovie] = useState([]);

	const { media_type, movieId } = useParams();
	let mediaType;
	if (media_type == "movie") {
		mediaType = "movie";
	} else {
		mediaType = "tv";
	}

	async function getMovie() {
		try {
			const { data } = await axios.get(
				`${baseUrl}/${mediaType}/${movieId}?api_key=${apikey}&append_to_response=videos`
			);

			setMovie(data);
		} catch {
			console.log("ERRRROR");
		}
	}
	useEffect(() => {
		getMovie();
	}, [movieId]);
	console.log(movie);

	if (!movie) return null;

	return (
		<>
			<Header />
			<div
				className="container"
				style={{
					background: `url(${posterImg(movie.backdrop_path, "original")})`,
				}}
			></div>
			<img src={posterImg(movie.poster_path)} id="poster_img" />
			<div className="movie_details">
				<span>{mediaType == "movie" ? movie.title : movie.name}</span>
			</div>
			<div>
				{setTimeout(
					() =>
						movie.videos.results.map((video) => (
							<iframe
								width="420"
								height="315"
								src={`https://www.youtube.com/embed/${video.key}`}
							></iframe>
						)),
					0
				)}
			</div>
			<div>
				{/* {movie.genres.map((video) => (
					<span>{video.name}</span>
				))} */}
			</div>

			<div id="overview">
				<p>{"Overview"}</p>
				{movie.overview}
			</div>

			<Footer />
		</>
	);
}
