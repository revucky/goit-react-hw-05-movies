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
              <Link to={`/movies/${movie.id}`} className={s.link}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default ListRen;
