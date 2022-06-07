import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Components
import Appbar from "../../components/appbar/Appbar";
import SearchBar from "../../components/searchBar/SearchBar";
import Multiselect from "multiselect-react-dropdown";

// Styles
import styles from "./Search.module.scss";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("s"));
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchQuery = async () => {
    setLoading(true);
    let response = await fetch(`http://localhost:4000/search?search=${search}`);
    response = await response.json();

    if (response.error) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    setSearchResults(response.data);
    setLoading(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ s: search });
    fetchQuery();
  };

  useEffect(() => {
    fetchQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.searchPage}>
      <Appbar />
      <div className={styles.content}>
        <Filters filters={filters} setFilters={setFilters} />
        <SearchSection search={search} setSearch={setSearch} handleSearchSubmit={handleSearchSubmit} />
        {loading ? "Loading..." : <SearchResults results={searchResults} />}
      </div>
    </div>
  );
};

export default SearchPage;

const Filters = ({ filters, setFilters }) => {
  return (
    <section className={styles.filtersSection}>
      <div className={styles.sort}>
        <label htmlFor="sort">
          <b>Sort</b> by:{" "}
        </label>
        <select id="sort" onChange={(e) => setFilters({ ...filters, sort: e.target.value })}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="author">Author</option>
          <option value="period">Period</option>
        </select>
        <span> in </span>
        <select id="order" onChange={(e) => setFilters({ ...filters, order: e.target.value })}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <span> order.</span>
      </div>
      <div className={styles.filter}>
        <label className={styles.label} htmlFor="filters">
          Filter by period:{" "}
        </label>
        <Multiselect
          options={[
            { label: "Name", value: "name" },
            { label: "Author", value: "author" },
            { label: "Period", value: "period" },
          ]}
          onSelect={(values) => setFilters({ ...filters, filters: values })}
          displayValue="label"
          placeholder="Select period"
          showCheckbox={true}
          closeOnSelect={false}
        />
      </div>

      <div className={styles.filter}>
        <label className={styles.label} htmlFor="filters">
          Filter by kind/genre:{" "}
        </label>
        <Multiselect
          options={[
            { label: "Name", value: "name" },
            { label: "Author", value: "author" },
            { label: "Period", value: "period" },
          ]}
          onSelect={(values) => setFilters({ ...filters, filters: values })}
          displayValue="label"
          placeholder="Select kind/genre"
          showCheckbox={true}
          closeOnSelect={false}
        />
      </div>

      <div className={styles.filter}>
        <label className={styles.label} htmlFor="filters">
          Filter by language:{" "}
        </label>
        <Multiselect
          options={[
            { label: "Name", value: "name" },
            { label: "Author", value: "author" },
            { label: "Period", value: "period" },
          ]}
          onSelect={(values) => setFilters({ ...filters, filters: values })}
          displayValue="label"
          placeholder="Select language"
          showCheckbox={true}
          closeOnSelect={false}
        />
      </div>

      <div className={styles.filter}>
        <label className={styles.label} htmlFor="filters">
          Has summary?{" "}
        </label>
        <select id="hasSummary" onChange={(e) => setFilters({ ...filters, hasSummary: e.target.value })}>
          <option value="all">All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    </section>
  );
};

const SearchSection = ({ search, setSearch, handleSearchSubmit }) => {
  const [searchType, setSearchType] = useState("exact");

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchBarContainer}>
        <form className={styles.searchBar} onSubmit={(e) => handleSearchSubmit(e)}>
          <SearchBar value={search} setValue={setSearch} />
        </form>
        <div className={styles.searchOptions}>
          <div className={styles.searchTypes}>
            <label className={styles.searchType}>
              <input type="radio" value="exact" checked={searchType === "exact"} onChange={(e) => handleSearchTypeChange(e)} /> Exact /
            </label>
            <label className={styles.searchType}>
              <input type="radio" value="fuzzy" checked={searchType === "fuzzy"} onChange={(e) => handleSearchTypeChange(e)} /> Fuzzy{" "}
            </label>
            Search
          </div>
        </div>
      </div>
    </section>
  );
};

const SearchResults = ({ results }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.resultsSection}>
      {results.length > 0 ? (
        results.map((result) => (
          <div className={styles.resultCard} onClick={() => navigate(`/books/${result.book_id}`)}>
            <img className={styles.image} src={result.image} alt={result.name} />
            <div className={styles.info}>
              <div className={styles.name}>{result.book_name}</div>
              <div className={styles.author}>{result.author}</div>
              <div className={styles.description}>{result.description}</div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noResults}>No results found</div>
      )}
    </section>
  );
};
