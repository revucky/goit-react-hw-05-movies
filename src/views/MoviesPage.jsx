import { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import ListRen from "../components/ListRen/ListRen";
import { getMoviesSearch } from "../services/ApiService";
import s from "./MoviesPage.module.css";
import * as storage from "../services/localStorage";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

const STORAGE_KEY = "movies";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [queryS, setQueryS] = useState(storage.get(STORAGE_KEY) ?? "");
  const [searchName, setSearchName] = useState("");
  // const [error, setError] = useState("");
  // const history = useHistory();
  useEffect(() => {
    storage.save(STORAGE_KEY, queryS);
  }, [queryS]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchName(queryS);
    // toast.error("Movie not found");
    // reset();
  };

  // const reset = () => {
  //   setQueryS("");
  // };

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movies = await getMoviesSearch(searchName);
        setMovies([...movies.results]);
      } catch (e) {
        // toast("Here you can find movies");
      } finally {
        <Loader />;
      }
    };

    getMovie();
  }, [searchName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={queryS}
          className={s.SearchInput}
          onChange={(e) => setQueryS(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search all movies"
        />
        <button className="Button" type="submit">
          Search
        </button>
      </form>
      <ListRen movies={movies} />
    </>
  );
}
