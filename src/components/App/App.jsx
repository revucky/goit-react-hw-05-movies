import Searchbar from "../../Searchbar/Searchbar";
import { Component } from "react";
import ImageGallery from "../../ImageGallery/ImageGallery";
import Button from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "24480734-3d80cd0fb88d3e4535c800802";
const BASE_URL = `https://pixabay.com/api/`;

export default class App extends Component {
  state = {
    q: "",
    images: [],
    page: 1,
    isModal: false,
    largeImage: "",
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    const { page, q } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      fetch(
        `${BASE_URL}?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then(({ hits }) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...hits],
          }))
        );
    }
  }

  openLargeImg = (src) => {
    this.setState({ largeImage: src });
  };

  handleFormSubmit = (q) => {
    this.setState({ q, images: [] });
  };
  handleClick = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };
  // Modal
  onModalOpen = () => {
    this.setState((prev) => ({ isModal: !prev.isModal }));
  };
  handleEsc = (evt) => {
    if (evt.code === "Escape") {
      this.onModalClose();
    }
  };
  onModalClose = (e) => {
    this.setState({ isModal: false });
  };

  render() {
    const { q, images, isModal, largeImage } = this.state;
    const {
      handleFormSubmit,
      handleEsc,
      onModalClose,
      handleClick,
      onModalOpen,
      openLargeImg,
    } = this;
    return (
      <>
        <Searchbar submit={handleFormSubmit} />
        {images.length > 0 && (
          <ImageGallery
            largeUrl={openLargeImg}
            modalO={onModalOpen}
            img={images}
          />
        )}
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1500}
        />
        {images.length > 0 && <Button onClick={handleClick} />}
        {isModal && (
          <Modal
            src={largeImage}
            handleEscape={handleEsc}
            onClick={onModalClose}
          />
        )}

        <ToastContainer position="top-center" autoClose={3000} />
      </>
    );
  }
}
