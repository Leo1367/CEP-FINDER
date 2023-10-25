import { useContext } from 'react';
import styles from '../../styles/App.module.css';
import style from './NotFound.module.css';
import { ErrorContext } from '../../context/CepError';


export default function NotFoundPage() {
  const { error } = useContext(ErrorContext);

  return (
    <div className={styles.container}>
      <div className={style.notfound}>
        <strong>{error}</strong>
      </div>
    </div>
  )
}