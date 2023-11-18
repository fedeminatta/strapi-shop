import Card from '../Card/Card';
import styles from './FeaturedProducts.module.sass';
import useFetch from '../../hooks/useFetch';
import { Slide } from 'react-awesome-reveal';
import LoadCard from '../LoadCard/LoadCard';

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
        `./products?populate=*&[filters][type][$eq]=${type}`
    );
    return (
        <Slide triggerOnce>
            <div className={styles.featuredProducts}>
                <div className={styles.top}>
                    <h1>{type} products</h1>
                    <p>
                        Renueva tu estilo con prendas cuidadosamente elegidas
                        para destacar en cualquier ocasión. Explora lo último en
                        moda con nuestra exclusiva colección {type} products
                    </p>
                </div>
            </div>
            <div className={styles.bottom}>
                {error ? (
                    'Error'
                ) : loading ? (
                    <LoadCard />
                ) : (
                    data.map((item) => <Card item={item} key={item.id} />)
                )}
            </div>
        </Slide>
    );
};

export default FeaturedProducts;
