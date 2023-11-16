import styles from './Navbar.module.sass';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);
    const [mostrarMenu, setMostrarMenu] = useState(false);

    useEffect(() => {
        // Función para determinar si la pantalla es de un dispositivo móvil
        const esDispositivoMovil = () => {
            return window.innerWidth <= 1160;
        };

        // Establecer el estado inicial basado en el tamaño de la pantalla
        setMostrarMenu(esDispositivoMovil(true));

        // Agregar un listener para actualizar el estado si el tamaño de la pantalla cambia
        const handleResize = () => {
            setMostrarMenu(esDispositivoMovil(false));
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del efecto para evitar fugas de memoria
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <MenuIcon
                className={styles.menu}
                onClick={() => setMostrarMenu(!mostrarMenu)}
            />
            <nav
                className={styles.navbar}
                style={{
                    transform: mostrarMenu
                        ? 'translateX(-100%)'
                        : 'translateX(0)',
                }}
            >
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
                                Men
                            </Link>
                        </div>
                        <div className={styles.item}>
                            <Link className="link" to="/products/2">
                                Women
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
                            FedeStore
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
                    </div>
                </div>
            </nav>
            <div className={styles.icons}>
                <SearchIcon />
                <PersonOutlineIcon />
                <FavoriteBorderIcon />
                <div className={styles.cartIcon} onClick={() => setOpen(!open)}>
                    <ShoppingCartOutlinedIcon />
                    <span>{products.length}</span>
                </div>
            </div>
            {open && <Cart />}
        </>
    );
};
export default Navbar;
