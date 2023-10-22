import { FaMapMarkerAlt } from "react-icons/fa";
import styles from '../../styles/App.module.css';
import style from './LogoCep.module.css';


export default function LogoCep() {
  return (
    <div className={styles.container}>
      <div className={style.heroLogo}>
        <FaMapMarkerAlt color="#00D2DF" className={style.heroIcon} />
        <strong>CEP<br /> <span>FINDER</span></strong>
      </div>
    </div>
  )
}