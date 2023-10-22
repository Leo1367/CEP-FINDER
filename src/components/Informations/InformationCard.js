import styles from './InformationsCard.module.css';

export default function InformationCard({ icons, result, title }) {
    return (
        <>
            {icons}
            < div className={styles.infoCard} >
                <h4>
                    {title}
                </h4>
                <p>
                    {result}
                </p>
                <hr />
            </div >
        </>
    );
}