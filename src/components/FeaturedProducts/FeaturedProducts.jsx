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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt natus expedita, cupiditate illo quaerat modi
                    provident rem odit voluptates quidem qui laudantium, quam
                    earum unde at harum animi facilis quo?
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
