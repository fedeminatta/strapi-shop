import { useState } from 'react';
import styles from './Product.module.sass';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0);

    if (quantity < 1) setQuantity(1);

    const images = [
        'https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1930645/pexels-photo-1930645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];
    return (
        <div className={styles.product}>
            <div className={styles.left}>
                <div className={styles.images}>
                    <img
                        src={images[0]}
                        alt=""
                        onClick={() => setSelectedImg(0)}
                    />
                    <img
                        src={images[1]}
                        alt=""
                        onClick={() => setSelectedImg(1)}
                    />
                </div>
                <div className={styles.mainImg}>
                    <img src={images[selectedImg]} alt="" />
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
