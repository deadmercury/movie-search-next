import styles from '../styles/ThemeToggler.module.css';
import { useTheme } from '../context/ThemeContext';

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // bxs-moon.svg
  const moonSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
    >
      <path d="M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142	c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z" />
    </svg>
  );
  // bxs-sun.svg
  const sunSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19H13V22H11zM11 2H13V5H11zM2 11H5V13H2zM19 11H22V13H19z" />
      <path
        transform="rotate(-134.999 5.99 18.01)"
        d="M4.989 16.51H6.989V19.51H4.989z"
      />
      <path
        transform="rotate(-45.001 18.01 5.99)"
        d="M16.51 4.99H19.511000000000003V6.99H16.51z"
      />
      <path
        transform="rotate(-134.983 5.99 5.99)"
        d="M4.489 4.99H7.489V6.99H4.489z"
      />
      <path
        transform="rotate(134.999 18.01 18.01)"
        d="M17.01 16.51H19.01V19.511000000000003H17.01z"
      />
    </svg>
  );
  const svg = { light: moonSVG, dark: sunSVG };

  return (
    <button
      className={styles.button}
      aria-labelledby="button-label"
      onClick={changeTheme}
    >
      <span id="button-label" hidden>
        Theme Toggler
      </span>
      {svg[theme]}
    </button>
  );
};

export default ThemeToggler;
