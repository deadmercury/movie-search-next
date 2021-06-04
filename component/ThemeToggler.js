import styles from '../styles/ThemeToggler.module.css';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button
      className={styles.button}
      aria-labelledby="button-label"
      onClick={changeTheme}
    >
      <span id="button-label" hidden>
        Theme Toggler
      </span>
      {theme === 'light' && (
        <Image
          src="/bxs-moon.svg"
          height="26"
          width="26"
          aria-hidden="true"
          focusable="false"
          title="Toggle Theme"
          alt="Theme Icon"
        />
      )}
      {theme === 'dark' && (
        <Image
          src="/bxs-sun.svg"
          height="26"
          width="26"
          aria-hidden="true"
          focusable="false"
          title="Toggle Theme"
          alt="Theme Icon"
        />
      )}
    </button>
  );
};

export default ThemeToggler;
