import styles from './Cart.module.sass';
import DeletOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            isNew: true,
            oldPrice: 19,
            price: 15,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Long Sleeve Graphic T-shirt',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            isNew: false,
            oldPrice: 18,
            price: 12,
        },
    ];

    return (
        <div className={styles.cart}>
            <h2>Products in your cart</h2>
            {data?.map((item) => (
                <div className={styles.item} key={item.id}>
                    <img src={item.img} alt="" />
                    <div className={styles.details}>
                        <h3>{item.title}</h3>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <span className={styles.price}>1 x ${item.price}</span>
                    </div>
                    <DeletOutlinedIcon className={styles.delete} />
                </div>
            ))}
            <div className={styles.total}>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEES TO CHECKOUT</button>
            <span className={styles.reset}>Reset Cart</span>
        </div>
    );
};
export default Cart;
