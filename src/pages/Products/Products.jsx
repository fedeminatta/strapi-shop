import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import styles from './Products.module.sass';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(300);
    const [tempMaxPrice, setTempMaxPrice] = useState(300);
    const [sort, setSort] = useState('desc');
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${catId}`
    );

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };

    return (
        <div className={styles.products}>
            <div className={styles.left}>
                <h2>Product Categories</h2>
                <div className={styles.filterItem}>
                    {data?.map((item) => (
                        <div className={styles.inputItem} key={item.id}>
                            <input
                                type="checkbox"
                                id={item.id}
                                value={item.id}
                                onChange={(e) => handleChange(e)}
                            />
                            <label htmlFor={item.id}>
                                {item.attributes.title}
                            </label>
                        </div>
                    ))}
                </div>
                <div className={styles.filterItem}>
                    <h2>Filter by price</h2>
                    <div className={styles.inputItem}>
                        <span>0</span>
                        <input
                            type="range"
                            min={0}
                            max={300}
                            onChange={(e) => setTempMaxPrice(e.target.value)}
                        />
                        <span>{tempMaxPrice}</span>
                        <button
                            className={styles.btnPrice}
                            onClick={() => setMaxPrice(tempMaxPrice)}
                        >
                            Filter
                        </button>
                    </div>
                </div>
                <div className={styles.filterItem}>
                    <h2>Sort by</h2>
                    <div className={styles.inputItem}>
                        <input
                            type="radio"
                            id="asc"
                            value="asc"
                            name="price"
                            onChange={() => setSort('asc')}
                        />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className={styles.inputItem}>
                        <input
                            type="radio"
                            id="desc"
                            value="desc"
                            name="price"
                            onChange={() => setSort('desc')}
                        />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <img
                    src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    className={styles.catImg}
                    alt=""
                />
                <List
                    catId={catId}
                    maxPrice={maxPrice}
                    sort={sort}
                    subCats={selectedSubCats}
                />
            </div>
        </div>
    );
};
export default Products;
