import { useState, useEffect } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
import ListRen from "../components/ListRen/ListRen";
import * as ApiService from "../services/ApiService";

export default function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiService.fetchWithError().then((data) => setMovies(data.results));
  }, []);
  // console.log(movies);
  return (
    <>
      <h2>Tranding Now</h2>
      <ListRen movies={movies} />
    </>
  );
}
