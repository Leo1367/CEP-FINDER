import { FaRegCopyright } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './FooterCep.module.css';


export default function FooterCep() {
  return (
    <footer className={styles.container}>
      <div className={style.footerCep}>
        <p>
          <FaRegCopyright color="#FFFFFF" /> 2023 - Leonardo e Edilando
        </p>
      </div>
    </footer>
  )
}