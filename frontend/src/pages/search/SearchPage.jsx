import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import Appbar from "../../components/appbar/Appbar";
import SearchBar from "../../components/searchBar/SearchBar";

// Styles
import styles from "./Search.module.scss";

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("s"));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch("http://your-php-server/ping-pong.php")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.searchPage}>
      <Appbar />
      <div className={styles.content}>
        <section className={styles.filterSection}>filterSection</section>
        <section className={styles.searchSection}>
          <div className={styles.searchBarContainer}>
            <form className={styles.searchBar} onSubmit={(e) => handleSearchSubmit(e)}>
              <SearchBar value={search} setValue={setSearch} />
            </form>
          </div>
        </section>
        <section className={styles.resultsSection}>resultsSection</section>
      </div>
    </div>
  );
};

export default SearchPage;
