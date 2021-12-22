import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Status.module.css';

export default function Status({ message }) {
  const [theme] = useTheme();
  return (
    <div role="alert" className={`${styles[theme]} ${styles.container}`}>
      {message}
    </div>
  );
}
