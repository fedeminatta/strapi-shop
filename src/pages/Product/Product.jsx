import { useState } from 'react';
import styles from './Product.module.sass';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id; // es el id que viene de los parametros de la url (lo usamos en la paginacion)
    const [selectedImg, setSelectedImg] = useState('img');
    const [quantity, setQuantity] = useState(1);

    if (quantity < 1) setQuantity(1);

    const { data, loading } = useFetch(`/products/${id}?populate=*`);

    const img1 = data?.attributes?.img?.data?.attributes?.url || '';

    const img2 = data?.attributes?.img2?.data?.attributes?.url || '';

    const imgSelected =
        data?.attributes?.[selectedImg].data?.attributes?.url || '';

    const dispatch = useDispatch();

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
                <h1>{data?.attributes?.title}</h1>
                <span className={styles.price}>${data?.attributes?.price}</span>
                <p>{data?.attributes?.description}</p>

                <div className={styles.quantity}>
                    <button onClick={() => setQuantity((prev) => prev - 1)}>
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>
                        +
                    </button>
                </div>

                <button
                    className={styles.add}
                    onClick={() =>
                        dispatch(
                            addToCart({
                                id: data.id,
                                title: data.attributes.title,
                                description: data.attributes.description,
                                price: data.attributes.price,
                                img: img1,
                                quantity,
                            })
                        )
                    }
                >
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
