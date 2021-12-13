import Searchbar from "../../Searchbar/Searchbar";
import Loader from "react-loader-spinner";
import { Component } from "react";
import { ImageGallery } from "../../ImageGallery/ImageGallery";
import { Modal } from "../../Modal/Modal";

const API_KEY = "24480734-3d80cd0fb88d3e4535c800802";
const BASE_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export default class App extends Component {
  state = {
    query: "",
    images: [],
  };

  componentDidMount() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => this.setState({ images: data.hits }));
  }

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery img={this.state.images} />
        {/* <Button/> */}
        {/* <Modal /> */}
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1500}
        />
      </>
    );
  }
}
