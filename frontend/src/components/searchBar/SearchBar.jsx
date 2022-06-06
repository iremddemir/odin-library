import React from "react";

// Style
import styles from "./SearchBar.module.scss";

const SearchBar = ({ value, setValue, placeholder = "Search for a book, an author, or a period...", style }) => {
  return (
    <div className={styles.searchBar} style={style}>
      <input className={styles.input} value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
