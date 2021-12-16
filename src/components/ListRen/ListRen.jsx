import { Link } from "react-router-dom";
import s from "./ListRen.module.css";

const ListRen = ({ movies }) => {
  // const {url} = useRouteMatch()
  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={s.item}>
              <Link to={`/movie/${movie.id}`} className={s.link}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default ListRen;
