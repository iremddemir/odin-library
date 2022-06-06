import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Style
import styles from "./Landing.module.scss";

// Components
import Appbar from "../../components/appbar/Appbar";
import { ReactComponent as Logo } from "../../assets/logoWithNames.svg";
import SearchBar from "../../components/searchBar/SearchBar";

// Data
import { books, authors } from "../../dummyData";

const LandingPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchsubmit = (e) => {
    e.preventDefault();
    navigate(`/search?s=${search}`);
  };

  return (
    <div className={styles.landingPage}>
      <Appbar />

      <section className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </section>

      <section className={styles.searchBarContainer}>
        <form className={styles.searchBar} onSubmit={(e) => handleSearchsubmit(e)}>
          <SearchBar style={{ width: "850px" }} value={search} setValue={setSearch} />
        </form>
      </section>

      <Cards title="Your Books" seeAllLink="/books?saved=true/" data={books} baseLink="/books" />
      <Cards title="Your Authors" seeAllLink="/authors?save=true/" data={authors} baseLink="/authors" />
      <Cards title="Popular Books" seeAllLink="/books?popular=true/" data={books} baseLink="/bboks" />

      <div className={styles.footer} />
    </div>
  );
};

export default LandingPage;

const Cards = ({ title, seeAllLink, data, baseLink }) => {
  const navigate = useNavigate();
  const firstFive = data.slice(0, 5);

  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <span className={styles.seeAll} onClick={() => navigate(seeAllLink)}>
          see all {">"}{" "}
        </span>
      </div>
      <div className={styles.cardsContainer}>
        {firstFive.map((item, index) => (
          <div className={styles.card} key={index} onClick={() => navigate(`${baseLink}/${item.id}/`)}>
            <img className={styles.image} src={item.image} alt={item.title} />
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
