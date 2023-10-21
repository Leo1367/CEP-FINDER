import styles from './InformationsCard.module.css';

export default function InformationCard({ icons, result, title }) {
    return (
        <>
            {icons}
            < div className={styles.infoCard} >
                <p>
                    {title}
                </p>
                <p>
                    {result}
                </p>
                <hr />
            </div >
        </>
    );
}