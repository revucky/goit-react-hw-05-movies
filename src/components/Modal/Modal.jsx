import React from "react";
import s from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ onClick, backDrop, src }) => {
  useEffect(() => {
    const handleEsc = (evt) => {
      if (evt.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClick]);

  return (
    <div className={s.Overlay} onClick={backDrop}>
      <div className={s.Modal}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

// export class Modal extends React.Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.props.handleEscape);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.props.handleEscape);
//   }

//   render() {
//     const { src } = this.props;
//     return (
//       <div className={s.Overlay} onClick={backDrop}>
//         <div className={s.Modal}>
//           <img src={src} alt="" />
//         </div>
//       </div>
//     );
//   }
// }
export default Modal;
