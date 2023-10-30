import styles from '../../styles/App.module.css';
import style from './NotFound.module.css';

export default function NotFoundPage({ error }) {

  return (
    <div className={styles.container}>
      <div className={style.notfound}>
        <strong>{error}</strong>
      </div>
    </div>
  )
}