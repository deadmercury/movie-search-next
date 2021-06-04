import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Status.module.css';

export default function Status({ message }) {
  const [theme] = useTheme();
  return (
    <div className={`${styles[theme]} ${styles.container}`}>{message}</div>
  );
}
