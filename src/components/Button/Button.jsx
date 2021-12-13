import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button" className={s.Button}>
        Load more...
      </button>
    </div>
  );
};

Button.propTypes = {};

export default Button;
