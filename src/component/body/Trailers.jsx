import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { apikey, baseUrl, imgBaseURL, posterImg } from "../../apiConfig";

export default function Trailers() {
	const [movies, setMovies] = useState([]);

	async function getPopularMovies() {
		try {
			const { data } = await axios.get(
				`${baseUrl}/movie/popular?api_key=${apikey}&append_to_response=videos`
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

	if (
		movies &&
		movies.map((movie) => {
			const { data } = axios.get(
				`${baseUrl}/movie/${movie.id}/videos?api_key=${apikey}`
			);
			console.log(data);
		})
	)
		return <div>Test</div>;
}
