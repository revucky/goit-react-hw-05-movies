import { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import * as ApiService from "../services/ApiService";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    ApiService.fetchMovieId(movieId).then(setMovie);
  }, [movieId]);
  console.log(movie);

  return (
    <>
      {movie && (
        <>
          <img
            width="350px"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="{movie.tagline}"
          />
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average * 10} %</p>
          <p>Overview {movie.overview}</p>
          <p>
            Genres
            {movie.genres.map((el) => {
              return el.name + " ";
            })}
          </p>
          <div>
            <h3>Additional information</h3>
            <Link to={`${url}/cast`}>Cast</Link> <br />
            <Link to={`${url}/reviews`}>Reviews</Link>
          </div>
        </>
      )}
    </>
  );
}
