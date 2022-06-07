import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Style
import styles from "./BookInfo.module.scss";

// Components
import Appbar from "../../components/appbar/Appbar";

const BookInfoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      let response = await fetch(`http://localhost:4000/book/${id}`);

      response = await response.json();

      if (response.error) {
        setBook({});
        return;
      }

      console.log(response.data);
      setBook(response.data);
      console.log(response.data.book_name);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.bookInfoPage}>
      <Appbar />
      <div className={styles.content}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <>
            <div className={styles.bookCover}>
              <img src={book.image} alt={book.book_name} />
            </div>
            <div className={styles.bookName}>{book.book_name}</div>
            <div className={styles.bookAuthor}>{book.author_name}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookInfoPage;
