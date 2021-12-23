import useSWRInfinite from 'swr/infinite';
import Status from '../component/Status';
import { genres, posterURL } from '../utils/tmdbwrapper';
import MovieCard from '../component/MovieCard';
import styles from '../styles/Results.module.css';
import { useTheme } from '../context/ThemeContext';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.reason);
  }
  return res.json();
};

export default function Results({ name, year }) {
  const [theme] = useTheme();
  const getKey = (currentPageIndex) => {
    return `/api/search?name=${name}&year=${year}&page=${currentPageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    revalidateOnFocus: false,
  });

  const loadMovies = () => {
    setSize(size + 1);
  };

  if (error) {
    console.log(error.toString());
    return (
      <Status message="Error Occured! Check console for more information." />
    );
  }

  if (!data) {
    return <Status message="Loading..." />;
  }

  if (!data[0].results.length) {
    return (
      <Status message="No Results Found. Try again with different query." />
    );
  }

  const movies = data
    .map((page) =>
      page.results.map((d) => {
        return {
          id: d.id,
          name: d.title,
          year: d.release_date ? d.release_date.split('-')[0] : 'Unknown',
          genre: d.genre_ids.map((id) => genres[id]).join(', '),
          poster: d.poster_path ? posterURL(d.poster_path) : '/404.png',
          desc: d.overview || '[No Overview Available]',
        };
      })
    )
    .flat();
  return (
    <>
      {movies.map((movie, i) => (
        <MovieCard {...movie} key={i} />
      ))}
      {size > 0 && data && typeof data[size - 1] === 'undefined' && (
        <Status message="Loading..." />
      )}
      <button
        className={`${styles[theme]} ${styles.load}`}
        onClick={loadMovies}
        hidden={size >= data[0].total_pages}
      >
        Load More
      </button>
    </>
  );
}
