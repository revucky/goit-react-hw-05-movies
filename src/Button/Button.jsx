import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick} type="button">
        Load more...
      </button>
    </div>
  );
};

Button.propTypes = {};

export default Button;
