import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, id, openModal, openLarge, srcLarge }) => {
  return (
    <li id={id} className="ImageGalleryItem-image">
      <img
        onClick={() => {
          openModal();
          openLarge(srcLarge);
        }}
        src={src}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
