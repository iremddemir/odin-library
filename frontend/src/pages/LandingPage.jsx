import React from "react";

// Style
import styles from "./Landing.module.scss";

// Components
import Appbar from "../components/appbar/Appbar";
import { ReactComponent as Logo } from "../assets/logoWithNames.svg";
import SearchBar from "../components/searchBar/SearchBar";

// Data
import { books, authors } from "../dummyData";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <Appbar />

      <section className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </section>

      <section className={styles.searchBarContainer}>
        <SearchBar style={{ width: "850px" }} />
      </section>

      <Cards title="Your Books" link="/" data={books} />
      <Cards title="Your Authors" link="/" data={authors} />
      <Cards title="Popular Books" link="/" data={books} />

      <div className={styles.footer} />
    </div>
  );
};

export default LandingPage;

const Cards = ({ title, link, data }) => {
  const firstFive = data.slice(0, 5);

  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <span className={styles.seeAll}>see all {">"} </span>
      </div>
      <div className={styles.cardsContainer}>
        {firstFive.map((item, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.image} src={item.image} alt={item.title} />
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
