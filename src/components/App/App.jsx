import Searchbar from "../../Searchbar/Searchbar";

import { Component } from "react";
import { ImageGallery } from "../../ImageGallery/ImageGallery";
import { Modal } from "../../Modal/Modal";
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

const API_KEY = "24480734-3d80cd0fb88d3e4535c800802";
const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export default class App extends Component {
  state = {
    picName: "",
    images: [],
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((picName) => this.setState({ picName }));
  }
  handleFormSubmit = () => {
    this.setState({ picName });
  };

  render() {
    return (
      <>
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery />
        {/* <Button/> */}
        {/* <Modal /> */}
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1500}
        />
        <ToastContainer position="top-center" autoClose={5000} />
      </>
    );
  }
}
