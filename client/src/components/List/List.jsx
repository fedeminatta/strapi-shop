import styles from './List.module.sass';
import Card from '../Card/Card';

const List = () => {
    return (
        <div className={styles.list}>
            {/* {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))} */}
        </div>
    );
};
export default List;
