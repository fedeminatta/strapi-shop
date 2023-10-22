import styles from './Card.module.sass';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`}>
            <div className={styles.card}>
                <div className={styles.image}>
                    {item.isNew && <span>New Season</span>}
                    <img
                        src={item.img}
                        alt={item.title}
                        className={styles.mainImg}
                    />
                    <img
                        src={item.img2}
                        alt={item.title}
                        className={styles.secondImg}
                    />
                </div>
                <h2>{item.title}</h2>
                <div className={styles.prices}>
                    <h3 className={styles.oldPrice}>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    );
};
export default Card;
