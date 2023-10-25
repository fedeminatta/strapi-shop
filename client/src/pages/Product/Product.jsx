import { useState } from 'react';
import styles from './Product.module.sass';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
    const id = useParams().id; // es el id que viene de los parametros de la url (lo usamos en la paginacion)
    const [selectedImg, setSelectedImg] = useState('img');
    const [quantity, setQuantity] = useState(1);

    if (quantity < 1) setQuantity(1);

    const { data, loading } = useFetch(`/products/${id}?populate=*`);

    const img1 =
        import.meta.env.VITE_UPLOAD_URL +
            data?.attributes?.img?.data?.attributes?.url || '';

    const img2 =
        import.meta.env.VITE_UPLOAD_URL +
            data?.attributes?.img2?.data?.attributes?.url || '';

    const imgSelected =
        import.meta.env.VITE_UPLOAD_URL +
            data?.attributes?.[selectedImg].data?.attributes?.url || '';

    return loading ? (
        'loading...'
    ) : (
        <div className={styles.product}>
            <div className={styles.left}>
                <div className={styles.images}>
                    <img
                        src={img1}
                        alt=""
                        onClick={() => setSelectedImg('img')}
                    />
                    <img
                        src={img2}
                        alt=""
                        onClick={() => setSelectedImg('img2')}
                    />
                </div>
                <div className={styles.mainImg}>
                    <img src={imgSelected} alt="" />
                </div>
            </div>

            <div className={styles.right}>
                <h1>Title</h1>
                <span className={styles.price}>$199</span>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam adipisci sapiente, ipsa modi omnis officiis nulla
                    perspiciatis maxime ducimus possimus sint id veniam? Eius at
                    quam nam minus reiciendis tenetur.
                </p>

                <div className={styles.quantity}>
                    <button onClick={() => setQuantity((prev) => prev - 1)}>
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>
                        +
                    </button>
                </div>

                <button className={styles.add}>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>

                <div className={styles.links}>
                    <div className={styles.item}>
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className={styles.item}>
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>

                <div className={styles.info}>
                    <span>Vendor: Polo</span>
                    <span>Product Type: T—Shirt</span>
                    <span>Tag: T—Shirt, Women, Top</span>
                </div>
                <hr />
                <div className={styles.info}>
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
