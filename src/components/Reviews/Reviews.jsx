import { useState, useEffect } from "react";
import * as ApiService from "../../services/ApiService";
import { toast } from "react-toastify";
import s from "./Reviews.module.css";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiService.fetchReview(movieId)
      .then((data) => setReviews(data.results))
      .catch((e) => {
        toast.error("We're sorry, we havent information");
      });
    return () => {};
  }, [movieId]);
  // console.log(reviews);
  return (
    <>
      {reviews.length !== 0 ? (
        <ul className={s.list}>
          {reviews.map(({ author, content, id }) => (
            <li className={s.item} key={id}>
              <b className={s.name}>{author}</b>
              <p className={s.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        // toast.error("We don't have any reviwes for this movie")
        <p>We don't have any reviwes for this movie</p>
      )}
    </>
  );
}
