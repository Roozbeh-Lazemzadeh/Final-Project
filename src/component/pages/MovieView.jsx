import Footer from "../Footer/Footer";
import Header from "../header/Header";
import "../../module/movie.css";
import PosterImg from "./movie/PosterImg";
import MovieImg from "./movie/MovieImg";
import MovieTitle from "./movie/MovieTitle";
import ReleaseGenreDuration from "./movie/ReleaseGenreDuration";
import UserScore from "./movie/UserScore";
import TagLine from "./movie/TagLine";
import AddToFavorite from "./movie/AddToFavorite";
import AddToWatchList from "./movie/AddToWatchList";
import RateIt from "./movie/RateIt";
import WatchTrailer from "./movie/WatchTrailer";
import CastView from "./movie/CastView";
import Overview from "./movie/Overview";

export default function MovieView({ movie, mediaType, session, user, cast }) {
  return (
    <>
      <Header />
      {movie ? (
        <>
          <PosterImg movie={movie} />
          <div className="contain-box">
            <MovieImg movie={movie} />
            <div className="movie_details">
              <MovieTitle movie={movie} mediaType={mediaType} />
              <ReleaseGenreDuration movie={movie} />
              <div className="Score_Fav_WatchList_Rate_Container">
                <UserScore movie={movie} />
                <AddToFavorite
                  session={session}
                  user={user}
                  mediaType={mediaType}
                  movie={movie}
                />
                <AddToWatchList
                  session={session}
                  user={user}
                  mediaType={mediaType}
                  movie={movie}
                />
                <RateIt
                  session={session}
                  movie={movie}
                  mediaType={mediaType}
                  user={user}
                />
                {movie.videos.results.length ? (
                  <WatchTrailer movie={movie} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <TagLine movie={movie} />
            <div id="overview">
              <Overview movie={movie} />
            </div>
          </div>
          <CastView cast={cast} />
        </>
      ) : (
        <h1>Loading</h1>
      )}
      <Footer />
    </>
  );
}
