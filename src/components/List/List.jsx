import styles from './List.module.sass';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';
import LoadCard from '../LoadCard/LoadCard';

const List = ({ subCats, maxPrice, sort, catId }) => {
    const subCatFilter = () => {
        return `${subCats.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}`;
    };
    const maxPriceFilter = () => `&[filters][price][$lte]=${maxPrice}`;
    const sortFilter = () => `&sort=price:${sort}`;

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${catId}${subCatFilter()}${maxPriceFilter()}${sortFilter()}`
    );

    return (
        <div className={styles.list}>
            {error ? (
                'error'
            ) : loading ? (
                <>
                    <LoadCard />
                    <LoadCard />
                    <LoadCard />
                </>
            ) : (
                data?.map((item) => <Card item={item} key={item.id} />)
            )}
        </div>
    );
};
export default List;
