import { Component } from "react";
import { useState } from "react";

import s from "./Searchbar.module.css";
import { toast } from "react-toastify";

const Searchbar = ({ submit }) => {
  const [picName, setPicName] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (picName.trim() === "") {
      toast.error("Type what you want see");
      return;
    }
    submit(picName);
    setPicName("");
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          type="text"
          value={picName}
          onChange={(ev) => setPicName(ev.target.value.toLowerCase())}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

// export default class Searchbar extends Component {
//   state = {
//     picName: "",
//   };

// handleChange = (ev) => {
//   this.setState({ picName: ev.target.value.toLowerCase() });
// };

// handleSubmit = (ev) => {
//   ev.preventDefault();
//   if (this.state.picName.trim() === "") {
//     toast.error("enter someone");
//     return;
//   }
//   this.props.submit(this.state.picName);
//   this.setState({ picName: "" });
// };

// render() {
//   const { handleSubmit, handleChange } = this;
//   const { picName } = this.state;
//   return (
//     <header className={s.Searchbar}>
//       <form onSubmit={handleSubmit} className={s.SearchForm}>
//         <button type="submit" className={s.SearchFormButton}>
//           <span className={s.SearchFormButtonLabel}>Search</span>
//         </button>
//         <input
//           className={s.SearchFormInput}
//           type="text"
//           value={picName}
//           onChange={handleChange}
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// }
// }
export default Searchbar;
