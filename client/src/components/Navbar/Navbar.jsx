import styles from './Navbar.module.sass';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <img src="/img/usa.png" width="40px" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className={styles.item}>
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className={styles.item}>
                        <Link className="link" to="/products/1">
                            Women
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link className="link" to="/products/2">
                            Men
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link className="link" to="/products/3">
                            Children
                        </Link>
                    </div>
                </div>
                <div className={styles.center}>
                    <Link className="link" to="/">
                        LAMASTORE
                    </Link>
                </div>
                <div className={styles.right}>
                    <div className={styles.item}>
                        <Link className="link" to="/">
                            Homepage
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link className="link" to="/">
                            About
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link className="link" to="/">
                            Contact
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link className="link" to="/">
                            Stores
                        </Link>
                    </div>
                    <div className={styles.icons}>
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div
                            className={styles.cartIcon}
                            onClick={() => setOpen(!open)}
                        >
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </nav>
    );
};
export default Navbar;
