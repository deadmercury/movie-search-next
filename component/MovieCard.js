import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/MovieCard.module.css';
import { decode } from 'html-entities';

export default function MovieCard({ id, name, year, genre, poster, desc }) {
  name = decode(name);
  desc = decode(desc);
  const [theme] = useTheme();
  return (
    <li className={styles['list-item']}>
      <a
        href={`https://www.themoviedb.org/movie/${id}`}
        target={'_blank'}
        rel="noopener noreferrer"
        className={styles.anchor}
      >
        <article className={`${styles[theme]} ${styles.article}`}>
          <h1 className={`${styles[theme]} ${styles.name}`} year={`(${year})`}>
            {name}
          </h1>
          <div className={`${styles[theme]} ${styles.year}`}>{`(${year})`}</div>
          <div className={`${styles[theme]} ${styles.genre}`}>{genre}</div>
          <div>
            <Image
              src={poster}
              width={154}
              height={231}
              alt={`${name} Poster`}
              title={`${name} Poster`}
            />
          </div>
          <p className={`${styles[theme]} ${styles.desc}`}>{desc}</p>
        </article>
      </a>
    </li>
  );
}
