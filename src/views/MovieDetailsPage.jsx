import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  useRouteMatch,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { Link } from "react-router-dom";
import * as ApiService from "../services/ApiService";
// import Cast from "../components/Cast/Cast";
import s from "./MovieDetails.module.css";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

const Cast = lazy(() =>
  import("../components/Cast/Cast" /* webpackChunkName: "movie-cast" */)
);
const Reviews = lazy(() =>
  import("../components/Reviews/Reviews" /* webpackChunkName: "movie-review" */)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const { url } = useRouteMatch();
  const history = useHistory();
  // console.log(movie);

  useEffect(() => {
    ApiService.fetchMovieId(movieId)
      .then(setMovie)
      .catch((e) => {
        toast.error("We're sorry, we havent information");
      });
  }, [movieId]);

  const handleGoBack = () => {
    history.goBack();
  };
  return (
    <>
      {movie && (
        <>
          <button className="Button" type="button" onClick={handleGoBack}>
            Go to Back
          </button>
          <div className={s.wrap}>
            <img
              width="350px"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="{movie.tagline}"
            />
            <div className={s.allTitleWrap}>
              <h2 className={s.title}>{movie.title || movie.name}</h2>
              <div>
                <h4 className={s.titleUp}>User Score</h4>
                <p className={s.subtitle}>{movie.vote_average * 10} %</p>
              </div>
              <div>
                <h3 className={s.titleUp}>Overview</h3>
                <p className={s.subtitle}>{movie.overview}</p>
              </div>
              <div>
                <h4 className={s.titleUp}>Genres</h4>
                <p className={s.subtitle}>
                  {movie.genres.map((el) => el.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <h3 className={s.titleUp}>Additional information</h3>

            <Link className={s.link} to={`${url}/cast`}>
              Cast
            </Link>
            <br />
            <Link className={s.link} to={`${url}/reviews`}>
              Reviews
            </Link>

            <hr />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route
                  path={`${url}/cast`}
                  component={(props) => <Cast {...props} movieId={movieId} />}
                />
                <Route
                  path={`${url}/reviews`}
                  component={(props) => (
                    <Reviews {...props} movieId={movieId} />
                  )}
                />
              </Switch>
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
