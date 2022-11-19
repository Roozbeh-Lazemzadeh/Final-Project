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
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

export default function Movie() {
	const [movie, setMovie] = useState(null);
	const [isFavorite, setIsfavorite] = useState(false);
	const { media_type, movieId } = useParams();

	const value = useContext(UserContext);

	console.log(movieId);
	console.log(value.favoriteMovie);

	useEffect(() => {
		if (movie && value.favoriteMovie.length) {
			const chekFavorite = value.favoriteMovie.find(
				(item) => item.id === movie?.id
			);
			setIsfavorite(Boolean(chekFavorite));
			console.log(chekFavorite);
		}
	}, [movie, isFavorite]);
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
		} catch {
			console.log("error");
		}
	}

	useEffect(() => {
		getMovie();
	}, [movieId]);

	// function to add favorite movie

	async function handelAddFavorite() {
		if (value.session) {
			try {
				const result = await axios.post(
					`${baseUrl}/account/${value.user.id}/favorite?api_key=${apikey}&session_id=${value.session}`,
					{
						media_type: `${mediaType}`,
						media_id: movie.id,
						favorite: !isFavorite,
					}
				);
				console.log(result);

				toast.success(
					`${movie.title}${
						isFavorite ? " Remove from favorite" : " Add to favorite"
					}`,
					{
						style: { backgroundColor: "#eec932", color: "#000" },
						position: "center",
					}
				);
			} catch {
				console.log("error");
			}
		} else {
			console.log("err");
		}
	}

	async function getFavoriteMove() {
		if (value.session) {
			try {
				const favorite = await axios.get(`
        ${baseUrl}/account/${value.user.id}/favorite/movies?api_key=${apikey}&language=en-US&sort_by=created_at.asc&page=1`);
			} catch {
				console.log("favorite");
			}
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
					<div className="contain-box">
						<img src={posterImg(movie.poster_path)} id="poster_img" />
						<div className="movie_details">
							<span>{mediaType == "movie" ? movie.title : movie.name}</span>
						</div>
						<div id="overview">
							<p>{movie ? "Overview" : ""}</p>
							{movie.overview}
							<div className="div-btn">
								{isFavorite ? (
									<>
										<button
											className="custom-btn"
											style={{ border: `1px solid #fcd535` }}
											onClick={handelAddFavorite}
										>
											<HeartFilled
												style={{ fontSize: "20px", color: "#fcd535" }}
											/>
										</button>
										<span>Remove from favorite</span>
									</>
								) : (
									<>
										<button
											className="custom-btn"
											style={{ border: `1px solid #fff` }}
											onClick={handelAddFavorite}
										>
											<HeartOutlined style={{ fontSize: "20px" }} />
										</button>
										<span>add to favorite</span>
									</>
								)}
							</div>
						</div>
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
				</>
			) : (
				<h1>Loading</h1>
			)}
			<Footer />
		</>
	);
}
