import React, { useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  const [popularBooks, setPopularBooks] = useState([]);
  const [popularAuthors, setPopularAuthors] = useState([]);
  const [popularPeriods, setPopularPeriods] = useState([]);

  const handleSearchsubmit = (e) => {
    e.preventDefault();
    navigate(`/search?s=${search}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Popular books
      let response = await fetch("http://localhost:4000/highestratedbooks");

      response = await response.json();

      if (response.error) {
        setPopularBooks([]);
        return;
      }

      setPopularBooks(response.data);

      // Popular authors
      response = await fetch("http://localhost:4000/highestratedauthors");

      response = await response.json();

      if (response.error) {
        setPopularAuthors([]);
        return;
      }

      setPopularAuthors(response.data);

      // Popular periods
      response = await fetch("http://localhost:4000/popularPeriods");

      response = await response.json();

      if (response.error) {
        setPopularPeriods([]);
        return;
      }

      console.log(response.data);
      setPopularPeriods(response.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.landingPage}>
      {/* <Appbar /> */}

      <section className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </section>

      <section className={styles.searchBarContainer}>
        <form className={styles.searchBar} onSubmit={(e) => handleSearchsubmit(e)}>
          <SearchBar style={{ width: "850px" }} value={search} setValue={setSearch} />
        </form>
      </section>

      {loading ? (
        "Loading..."
      ) : (
        <>
          <Periods title="Most Loved Periods" seeAllLink="/books?saved=true/" data={popularPeriods} baseLink="/periods" />
          <Authors title="Popular Authors" seeAllLink="/authors?save=true/" data={popularAuthors} baseLink="/authors" />
          <Books title="Popular Books" seeAllLink="/books?popular=true/" data={popularBooks} baseLink="/books" />
        </>
      )}
      <div className={styles.footer} />
    </div>
  );
};

export default LandingPage;

const Periods = ({ title, seeAllLink, data, baseLink }) => {
  const navigate = useNavigate();
  const firstFive = data.slice(0, 5);

  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {/* <span className={styles.seeAll} onClick={() => navigate(seeAllLink)}>
          see all {">"}{" "}
        </span> */}
      </div>
      <div className={styles.cardsContainer}>
        {firstFive.map((item, index) => (
          <div
            className={styles.card}
            key={index}
            //  onClick={() => navigate(`${baseLink}/${item.id}/`)}
          >
            {item.image && <img className={styles.image} src={item.image} alt={item.title} />}
            <p className={styles.name}>{item.period_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Books = ({ title, seeAllLink, data, baseLink }) => {
  // const navigate = useNavigate();
  const firstFive = data.slice(0, 5);

  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {/* <span className={styles.seeAll} onClick={() => navigate(seeAllLink)}>
          see all {">"}{" "}
        </span> */}
      </div>
      <div className={styles.cardsContainer}>
        {firstFive.map((item, index) => (
          <div
            className={styles.card}
            key={index}
            // onClick={() => navigate(`${baseLink}/${item.id}/`)}
          >
            {item.image && <img className={styles.image} src={item.image} alt={item.title} />}
            <p className={styles.name}>{item.book_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Authors = ({ title, seeAllLink, data, baseLink }) => {
  // const navigate = useNavigate();
  const firstFive = data.slice(0, 5);

  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {/* <span className={styles.seeAll} onClick={() => navigate(seeAllLink)}>
          see all {">"}{" "}
        </span> */}
      </div>
      <div className={styles.cardsContainer}>
        {firstFive.map((item, index) => (
          <div
            className={styles.card}
            key={index}
            // onClick={() => navigate(`${baseLink}/${item.id}/`)}
          >
            {item.image && <img className={styles.image} src={item.image} alt={item.title} />}
            <p className={styles.name}>{item.author_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
