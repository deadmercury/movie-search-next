import Head from 'next/head';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggler from '../component/ThemeToggler';
import styles from '../styles/index.module.css';
import Page from '../component/Page';

export default function Search() {
  const [theme] = useTheme();
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const loadMovies = () => {
    setPages(
      pages.concat(
        <Page
          index={pages.length + 1}
          key={pages.length + 1}
          query={[movieName, movieYear]}
        />
      )
    );
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setTotalPages(0);
    setPages([
      <Page
        index={1}
        key="1"
        query={[movieName, movieYear]}
        setTotalPages={setTotalPages}
      />,
    ]);
  };

  return (
    <>
      <Head>
        <title>Movie Search</title>
        <meta name="description" content="Movie Search Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={`${styles[theme]} ${styles.main}`}>
        <ThemeToggler />
        <h1 className={`${styles[theme]} ${styles.heading}`}>Search Movies</h1>
        <form
          className={`${styles[theme]} ${styles.form}`}
          onSubmit={handleFormSubmission}
        >
          <div>
            <label htmlFor="movie-name">Name</label>
            <input
              type="text"
              id="movie-name"
              required
              value={movieName}
              onInput={(e) => setMovieName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="movie-year">Year</label>
            <input
              type="number"
              max="2099"
              min="1880"
              id="movie-year"
              value={movieYear}
              onInput={(e) => setMovieYear(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Search" />
          </div>
        </form>
        <div className={styles.results}>{pages}</div>
        {totalPages > pages.length && (
          <button
            className={`${styles[theme]} ${styles.load}`}
            onClick={loadMovies}
          >
            Load More
          </button>
        )}
      </main>
    </>
  );
}
