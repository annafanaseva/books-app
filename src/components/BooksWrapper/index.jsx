import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setFetchingBooks, setRecomendedBooks } from '../../store/actions';
import Loader from '../../components/Loader/index.tsx';
import { API_URL, MAX_RESULTS } from '../../constants/api';
import Button from '../../components/Button';
import BookCard from '../../components/BookCard';
import SearchField from '../../components/SearchField';

import styles from './BooksWrapper.module.scss';

const BooksWrapper = () => {
  const [books, setBooks] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [maxResults, setMaxResults] = useState(MAX_RESULTS);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const isAuthorised = useSelector((state) => state.isAuthorised);
  const inputValue = useSelector((state) => state.inputValue);
  const selectValue = useSelector((state) => state.selectValue);

  useEffect(() => {
    fetchData();
  }, [inputValue, maxResults, selectValue]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&startIndex=0&maxResults=${maxResults}&key=${API_URL}`
      );
      const json = await res.json();

      dispatch(setFetchingBooks(books));
      json.items && setBooks([...json.items]);
      setIsLoading(false);
      setIsError(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  const fetchRecomendations = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=js&startIndex=0&maxResults=6&key=${API_URL}`
      );
      const json = await res.json();

      dispatch(setRecomendedBooks(recomendations));
      json.items && setRecomendations([...json.items]);
    } catch (e) {
      setIsError(true);
    }
  };

  isAuthorised && fetchRecomendations();

  const loadMore = () => {
    setMaxResults(maxResults + MAX_RESULTS);
  };

  return (
    <>
      <SearchField />

      {isError && <div className={styles.errorTitle}>Что-то пошло не так</div>}

      <div className="container">
        {isLoading ? (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        ) : (
          <>
            <div className={styles.booksWrapper}>
              {books ? (
                books.map((book) => {
                  return <BookCard key={book.id} book={book} />;
                })
              ) : (
                <div className={styles.title}>Не найдено</div>
              )}
            </div>

            <div className={styles.buttonWrapper} onClick={() => loadMore()}>
              <Button title="Загрузить еще" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BooksWrapper;
