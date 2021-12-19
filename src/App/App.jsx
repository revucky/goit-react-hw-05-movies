import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import Container from "../components/Container/Conteiner";
// import Homepage from "../views/HomePage";
// import MoviesPage from "../views/MoviesPage";
// import NotFoundView from "../views/NotFound";
// import MovieDetailsPage from "../views/MovieDetailsPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Loader from "react-loader-spinner";

const Homepage = lazy(() => import("../views/HomePage"));
const MoviesPage = lazy(() => import("../views/MoviesPage"));
const NotFoundView = lazy(() => import("../views/NotFound"));
const MovieDetailsPage = lazy(() => import("../views/MovieDetailsPage"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <AppBar />
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Container>
      </Suspense>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}
