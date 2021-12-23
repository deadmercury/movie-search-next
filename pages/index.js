import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggler from '../component/ThemeToggler';
import styles from '../styles/index.module.css';
import Results from '../component/Results';

export default function Search() {
  const [theme, setTheme] = useTheme();
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [results, setResults] = useState(false);

  useEffect(() => {
    window.matchMedia(`(prefers-color-scheme: dark)`).onchange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
      setTheme('light');
    }
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setResults(<Results name={movieName} year={movieYear} />);
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
        <ul className={styles.results}>{results}</ul>
      </main>
    </>
  );
}
