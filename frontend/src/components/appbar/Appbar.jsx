import React from "react";

// Style
import styles from "./Appbar.module.scss";

const Appbar = () => {
  return (
    <div className={styles.appbar}>
      <div>Odin Logo</div>
      <p>Books</p>
      <p>Authors</p>
      <p>Saved Books</p>
      <div>Profile</div>
    </div>
  );
};

export default Appbar;
