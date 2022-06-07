import React from "react";
import { useNavigate } from "react-router-dom";

// Style
import styles from "./Appbar.module.scss";

// Component
import { ReactComponent as Logo } from "../../assets/logoWithNames.svg";

const Appbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.appbar}>
      <div onClick={() => navigate("/")} className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <p onClick={() => navigate("/books/")}>Books</p>
      <p onClick={() => navigate("/authors/")}>Authors</p>
      <p onClick={() => navigate("/books?saved=true/")}>Saved Books</p>
      <p onClick={() => navigate("/profile/")}>Profile</p>
    </div>
  );
};

export default Appbar;
