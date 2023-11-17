import styles from './LoadCard.module.sass';

const LoadCard = () => {
    return (
        <article className={styles.container}>
            <div className={styles.img}></div>
            <div className={styles.largeText}></div>
            <section>
                <div className={styles.shortText}></div>
                <div className={styles.shortText}></div>
            </section>
        </article>
    );
};
export default LoadCard;
