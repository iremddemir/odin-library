import React from "react";

// Style
import styles from "./SearchBar.module.scss";

const SearchBar = ({ style }) => {
  return (
    <div className={styles.searchBar} style={style}>
      <input className={styles.input} type="text" placeholder="Search for a book, an author, or a period..." />
    </div>
  );
};

export default SearchBar;
