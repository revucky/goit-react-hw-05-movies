import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import * as ApiService from "../../services/ApiService";
import s from "./Cast.module.css";
import { toast } from "react-toastify";

export default function Cast({ movieId }) {
  const [castS, setCast] = useState([]);

  useEffect(() => {
    ApiService.fetchCastId(movieId)
      .then((data) => setCast(data.cast))
      .catch((e) => {
        toast.error("We're sorry, we havent information");
      });
    return () => {};
  }, [movieId]);
  // console.log();
  return (
    <ul className={s.list}>
      {castS.map((cas) => {
        if (cas.profile_path) {
          return (
            <li className={s.item} key={cas.id}>
              <img
                width="150"
                src={`https://image.tmdb.org/t/p/w500${cas.profile_path}`}
                alt={cas.original_name}
              />
              <p>{cas.name}</p>
              <p>{cas.character}</p>
            </li>
          );
        } else return <p key={cas.id}>{cas.name}: We haven't photo</p>;
      })}
    </ul>
  );
}
