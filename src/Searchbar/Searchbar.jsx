import { Component } from "react";
import { toast } from "react-toastify";

export default class Searchbar extends Component {
  state = {
    picName: "",
  };

  handleChange = (ev) => {
    this.setState({ picName: ev.target.value.toLowerCase() });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.picName.trim() === "") {
      toast.error("enter someone");
      return;
    }
    this.props.submit(this.state.picName);
    this.setState({ picName: "" });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { picName } = this.state;
    return (
      <header className="Searchbar">
        <form onSubmit={handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            value={picName}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
