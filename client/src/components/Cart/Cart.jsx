import styles from './Cart.module.sass';
import DeletOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {
    const data = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        data.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div className={styles.cart}>
            <h2>Products in your cart</h2>
            {data?.map((item) => (
                <div className={styles.item} key={item.id}>
                    <img src={item.img} alt="" />
                    <div className={styles.details}>
                        <h3>{item.title}</h3>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <span className={styles.price}>
                            {item.quantity} x ${item.price}
                        </span>
                    </div>
                    <DeletOutlinedIcon
                        className={styles.delete}
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}
            <div className={styles.total}>
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEES TO CHECKOUT</button>
            <span
                className={styles.reset}
                onClick={() => dispatch(resetCart())}
            >
                Reset Cart
            </span>
        </div>
    );
};
export default Cart;
