// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
// import Container from "../components/Container/Conteiner";
import Homepage from "../views/HomePage";
import MoviesPage from "../views/MoviesPage";
import NotFoundView from "../views/NotFound";
import MovieDetailsPage from "../views/MovieDetailsPage";
// import Loader from "react-loader-spinner";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

export default function App() {
  return (
    <>
      {/* <Container> */}
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/">
          <NotFoundView />
        </Route>
      </Switch>
      {/* </Container> */}

      {/* <Searchbar submit={handleFormSubmit} />
      {isLoad && (
        <Loader
          className="App-header"
          type="ThreeDots"
          color="#3f51b5"
          height={80}
          width={80}
          timeout={1500}
        />
      )}
      {images.length > 0 && (
        <ImageGallery
          largeUrl={openLargeImg}
          modalO={onModalOpen}
          img={images}
        />
      )}

      {images.length > 0 && <Button onClick={handleClick} />}
      {isLoad && page !== 1 && <Loader />}
      {isModal && (
        <Modal
          src={largeImage}
          handleEscape={handleEsc}
          onClick={onModalClose}
          backDrop={handleBackdrop}
        />
      )}
      <ToastContainer position="top-center" autoClose={3000} /> */}
    </>
  );
}
