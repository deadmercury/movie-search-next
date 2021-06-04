import MovieCard from '../component/MovieCard';
import useSWR from 'swr';
import { genres, posterURL } from '../utils/tmdbwrapper';
import Status from '../component/Status';

export default function Page({ index, query, setTotalPages }) {
  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.reason);
    }
    return res.json();
  };

  const { data, error } = useSWR(
    `/api/search/?name=${query[0]}&year=${query[1]}&page=${index}`,
    fetcher
  );

  if (error) {
    console.log(error.toString());
    return (
      <Status message="Error Occured! Check console for more information." />
    );
  }

  if (!data) {
    return <Status message="Loading..." />;
  }

  if (!data.results.length) {
    return (
      <Status message="No Results Found. Try again with different query." />
    );
  }

  if (setTotalPages) setTotalPages(data.total_pages);

  const movies = data.results.map((d) => {
    return {
      name: d.title,
      year: d.release_date ? d.release_date.split('-')[0] : 'Unknown',
      genre: d.genre_ids.map((id) => genres[id]).join(', '),
      poster: d.poster_path ? posterURL(d.poster_path) : '/404.png',
      desc: d.overview || '[No Overview Available]',
    };
  });
  return (
    <>
      {movies.map((movie, i) => (
        <MovieCard {...movie} key={i} />
      ))}
    </>
  );
}
