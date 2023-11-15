import Card from '../Card/Card';
import styles from './FeaturedProducts.module.sass';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
        `./products?populate=*&[filters][type][$eq]=${type}`
    );
    return (
        <div className={styles.featuredProducts}>
            <div className={styles.top}>
                <h1>{type} products</h1>
                <p>
                    Renueva tu estilo con prendas cuidadosamente elegidas para
                    destacar en cualquier ocasión. Explora lo último en moda con
                    nuestra exclusiva colección.
                </p>
            </div>
            <div className={styles.bottom}>
                {error
                    ? 'Error'
                    : loading
                    ? 'Loading'
                    : data.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    );
};

export default FeaturedProducts;
