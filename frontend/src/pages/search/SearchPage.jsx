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
  const [filters, setFilters] = useState({
    period: [],
    kind: [],
    language: [],
    hasSummary: "all",
  });
  const [sort, setSort] = useState({
    by: "none",
    order: "asc",
  });
  const [searchIn, setSearchIn] = useState("all");
  const [searchType, setSearchType] = useState("fuzzy");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(10);

  const fetchQuery = async () => {
    setLoading(true);
    let response = await fetch(
      `http://localhost:4000/search?keyword=${search}&sortBy=${sort.by}&sortOrder=${
        sort.order
      }&searchIn=${searchIn}&searchType=${searchType}&period=${filters.period.map((period) => period.value).join(",")}&kind=${filters.kind
        .map((kind) => `'${kind.value}'`)
        .join(",")}&language=${filters.language.map((language) => language.value).join(",")}&hasSummary=${
        filters.hasSummary
      }&page=${page}&pageSize=${pageSize}`
    );
    response = await response.json();

    if (response.error) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    setSearchResults(response.data);
    setTotalPages(Math.ceil(response.totalCount / pageSize));
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
  }, [page, pageSize]);

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchIn, searchType, sort.by, sort.order, filters.period, filters.kind, filters.language, filters.hasSummary, pageSize]);

  return (
    <div className={styles.searchPage}>
      <Appbar />
      <div className={styles.content}>
        <Filters filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        <SearchSection
          search={search}
          setSearch={setSearch}
          handleSearchSubmit={handleSearchSubmit}
          searchIn={searchIn}
          setSearchIn={setSearchIn}
          searchType={searchType}
          setSearchType={setSearchType}
        />
        {loading ? (
          "Loading..."
        ) : (
          <>
            <Pagination page={page} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} totalPages={totalPages} />
            <SearchResults results={searchResults} />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

const Filters = ({ filters, setFilters, sort, setSort }) => {
  const [periods, setPeriods] = useState([]);
  const [kinds, setKinds] = useState([]);
  const [languages, setLanguages] = useState([]);

  // Fetch filter options
  useEffect(() => {
    const fetchFilters = async () => {
      // Fetch periods
      let periodsResponse = await fetch(`http://localhost:4000/periods`);
      periodsResponse = await periodsResponse.json();

      if (periodsResponse.error) {
        setPeriods([]);
        return;
      }

      setPeriods(periodsResponse.data.map((period) => ({ value: period.period_id, label: period.period_name })));

      // Fetch kinds
      let kindsResponse = await fetch(`http://localhost:4000/genres`);
      kindsResponse = await kindsResponse.json();

      if (kindsResponse.error) {
        setKinds([]);
        return;
      }

      setKinds(kindsResponse.data.map((kind) => ({ value: kind.kind_genre, label: kind.kind_genre })));

      // Fetch languages
      let languagesResponse = await fetch(`http://localhost:4000/languages`);
      languagesResponse = await languagesResponse.json();

      if (languagesResponse.error) {
        setLanguages([]);
        return;
      }

      setLanguages(
        languagesResponse.data.filter((l) => l.language !== "").map((language) => ({ value: language.language, label: language.language }))
      );
    };

    fetchFilters();
  }, []);

  const handleSortByChange = (e) => {
    setSort({ by: e.target.value, order: sort.order });
  };

  const handleSortOrderChange = (e) => {
    setSort({ by: sort.by, order: e.target.value });
  };

  return (
    <section className={styles.filtersSection}>
      <div className={styles.sort}>
        <label htmlFor="sort">
          <b>Sort</b> by:{" "}
        </label>
        <select id="sort" onChange={handleSortByChange}>
          <option value="none">None</option>
          <option value="book_name">Name</option>
          <option value="author">Author</option>
          <option value="period">Period</option>
        </select>
        <span> in </span>
        <select id="order" onChange={handleSortOrderChange}>
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
          options={periods}
          selectedValues={filters.period}
          onSelect={(values) => setFilters({ ...filters, period: values })}
          onRemove={(values) => setFilters({ ...filters, period: values })}
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
          options={kinds}
          selectedValues={filters.kind}
          onSelect={(values) => setFilters({ ...filters, kind: values })}
          onRemove={(values) => setFilters({ ...filters, kind: values })}
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
          options={languages}
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
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </section>
  );
};

const SearchSection = ({ search, setSearch, handleSearchSubmit, searchIn, setSearchIn, searchType, setSearchType }) => {
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearchInChange = (e) => {
    setSearchIn(e.target.value);
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
          <div className={styles.searchIn}>
            Search in:{" "}
            <label className={styles.searchInLabel}>
              <input type="radio" value="all" checked={searchIn === "all"} onChange={(e) => handleSearchInChange(e)} /> All /
            </label>
            <label className={styles.searchByLabel}>
              <input type="radio" value="name" checked={searchIn === "name"} onChange={(e) => handleSearchInChange(e)} /> Title /
            </label>
            <label className={styles.searchByLabel}>
              <input type="radio" value="author" checked={searchIn === "author"} onChange={(e) => handleSearchInChange(e)} /> Author /{" "}
            </label>
            <label className={styles.searchByLabel}>
              <input type="radio" value="description" checked={searchIn === "description"} onChange={(e) => handleSearchInChange(e)} /> Description{" "}
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pagination = ({ page, setPage, totalPages, pageSize, setPageSize }) => {
  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  return (
    <section className={styles.pagination}>
      <div className={styles.paginationOptions}>
        <label className={styles.paginationLabel}>
          <b>Page</b>
        </label>
        <select id="page" onChange={(e) => handlePageChange(e)} value={page}>
          {[...Array(totalPages).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span> of </span>
        <select id="pageSize" onChange={(e) => handlePageSizeChange(e)} value={pageSize}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </section>
  );
};

const SearchResults = ({ results }) => {
  // const navigate = useNavigate();

  return (
    <section className={styles.resultsSection}>
      {results.length > 0 ? (
        results.map((result) => (
          <div
            className={styles.resultCard}
            // onClick={() => navigate(`/books/${result.book_id}`)}
          >
            <img className={styles.image} src={result.image} alt={result.name} />
            <div className={styles.info}>
              <div className={styles.name}>{result.book_name}</div>
              <div className={styles.author}>{result.author_name}</div>
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
