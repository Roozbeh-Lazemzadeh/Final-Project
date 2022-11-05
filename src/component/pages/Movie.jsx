import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apikey, posterImg } from "../../apiConfig";

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
				`${baseUrl}/${mediaType}/${movieId}?api_key=${apikey}`
			);

			console.log(data);

			setMovie(data);
		} catch {
			console.log("ERRRROR");
		}
	}
	useEffect(() => {
		getMovie();
	}, [movieId]);

	return (
		<div>
			<h3>{mediaType == "movie" ? movie.title : movie.name}</h3>
			<img src={posterImg(movie.poster_path)} />
		</div>
	);
}
