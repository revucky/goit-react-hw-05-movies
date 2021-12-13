import React from "react";

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.handleEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.handleEscape);
  }

  render() {
    const { src } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}
