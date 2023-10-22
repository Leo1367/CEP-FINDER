import styles from '../../styles/App.module.css';
import style from './NotFound.module.css';


export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={style.notfound}>
        <strong>CEP NÃO <br />ENCONTRADO</strong>
      </div>
    </div>
  )
}