import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItemImage.module.css";

const ImageGalleryItem = ({ src, id, openModal, openLarge, srcLarge }) => {
  return (
    <li id={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
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

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
};

export default ImageGalleryItem;
