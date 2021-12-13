import Searchbar from "../../Searchbar/Searchbar";

import { Component } from "react";
import { ImageGallery } from "../../ImageGallery/ImageGallery";
import Button from "../../Button/Button";
import { Modal } from "../../Modal/Modal";
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY = "24480734-3d80cd0fb88d3e4535c800802";
const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export default class App extends Component {
  state = {
    picName: "",
    images: [],
    page: 1,
    isModal: false,
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((picName) => this.setState({ picName }));
  }
  handleFormSubmit = (picName) => {
    this.setState({ picName });
  };

  onModalOpen = () => {
    this.setState({ isModal: true });
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
    const { picName, images, isModal } = this.state;
    const { handleFormSubmit, handleEscape, onModalClose } = this;
    return (
      <>
        <Searchbar submit={handleFormSubmit} />
        <ImageGallery />
        <Button />
        {isModal && (
          <Modal handleEscape={handleEscape} onClick={onModalClose} />
        )}
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1500}
        />
        <ToastContainer position="top-center" autoClose={3000} />
      </>
    );
  }
}
