import styles from './Card.module.sass';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const apiUpload = import.meta.env.VITE_UPLOAD_URL;
    const img = item?.attributes?.img?.data?.attributes?.url;
    const img2 = item?.attributes?.img2?.data?.attributes?.url;
    return (
        <Link to={`/product/${item?.id}`}>
            <div className={styles.card}>
                <div className={styles.image}>
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img
                        src={img}
                        alt={item?.attributes.title}
                        className={styles.mainImg}
                    />
                    <img
                        src={img2}
                        alt={item?.attributes.title}
                        className={styles.secondImg}
                    />
                </div>
                <div className={styles.bottom}>
                    <h2>{item?.attributes.title}</h2>
                    <div className={styles.prices}>
                        <h3 className={styles.oldPrice}>
                            ${item?.oldPrice || item?.attributes?.price + 20}
                        </h3>
                        <h3>${item?.attributes?.price}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default Card;
