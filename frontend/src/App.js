import React from "react";
import { Route, Routes } from "react-router-dom";

// Style
import "./App.css";

// Pages
import LandingPage from "./pages/landing/LandingPage";
import BooksPage from "./pages/books/BooksPage";
import BookInfoPage from "./pages/bookInfo/BookInfoPage";
import AuthorsPage from "./pages/authors/AuthorsPage";
import AuthorInfoPage from "./pages/authorInfo/AuthorInfoPage";
import PeriodInfoPage from "./pages/periodInfo/PeriodInfoPage";
import SearchPage from "./pages/search/SearchPage";
import ProfilePage from "./pages/profile/ProfilePage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/books" element={<BooksPage />} />
        <Route exact path="/books/:id" element={<BookInfoPage />} />
        <Route exact path="/authors" element={<AuthorsPage />} />
        <Route exact path="/authors/:id" element={<AuthorInfoPage />} />
        <Route exact path="/periods/:id" element={<PeriodInfoPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
