import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl, apikey, posterImg } from "../../apiConfig";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import "../../module/movie.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

export default function Movie() {
	const [movie, setMovie] = useState();
	const { media_type, movieId } = useParams();
	const value = useContext(UserContext);

	// get media-type
	let mediaType;
	if (media_type == "movie") {
		mediaType = "movie";
	} else {
		mediaType = "tv";
	}

	//
	async function getMovie() {
		try {
			let response = await fetch(
				`${baseUrl}/${mediaType}/${movieId}?api_key=${apikey}&append_to_response=videos`
			);
			let data = await response.json();
			setMovie(data);
			console.log(data);
		} catch {
			console.log("error");
		}
	}

	useEffect(() => {
		getMovie();
	}, [movieId]);

	//function to add favorite movie
	async function handelAddFavorite() {
		if (value.session) {
			try {
				const result = await axios.post(
					`${baseUrl}/account/${value.user.id}/favorite?api_key=${apikey}&session_id=${value.session}`,
					{ media_type: `${mediaType}`, media_id: movie.id, favorite: true }
				);

				console.log(result);
				toast.success("film add your favorite list", {
					style: { backgroundColor: "#eec932", color: "#000" },
					position: "center",
				});
			} catch {
				console.log("err");
			}
		} else {
			console.log("err");
		}
	}

	//function to remove favorite movie
	async function handelRemoveavorite() {
		if (value.session) {
			try {
				const result = await axios.post(
					`${baseUrl}/account/${value.user.id}/favorite?api_key=${apikey}&session_id=${value.session}`,
					{ media_type: `${mediaType}`, media_id: movie.id, favorite: false }
				);

				console.log(result);
				toast.success("film add your favorite list", {
					style: { backgroundColor: "#eec932", color: "#000" },
					position: "center",
				});
			} catch {
				console.log("err");
			}
		} else {
			console.log("err");
		}
	}

	return (
		<>
			<Header />
			{movie ? (
				<>
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
						{movie.videos.results.map((video) => (
							<iframe
								width="420"
								height="315"
								src={`https://www.youtube.com/embed/${video.key}`}
							></iframe>
						))}
					</div>

					<div id="overview">
						<p>{movie ? "Overview" : ""}</p>
						{movie.overview}
						<div className="div-btn">
							<button className="custom-btn" onClick={handelAddFavorite}>
								Add favorite
							</button>
							<button className="custom-btn" onClick={handelRemoveavorite}>
								Remove favorite
							</button>
						</div>
					</div>
				</>
			) : (
				<h1>Loading</h1>
			)}
			<Footer />
		</>
	);
}
