import styles from '../../styles/App.module.css';
import style from './InformationsBox.module.css';


export default function InforBox({ children }) {
    return (
        <section className={styles.container}>
            <div className={style.infoBox}>
                {children}
            </div>
        </section>
    );
}
