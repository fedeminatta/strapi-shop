import { Link } from 'react-router-dom';
import styles from './Categories.module.sass';
import { Fade } from 'react-awesome-reveal';

const Categories = () => {
    return (
        <Fade triggerOnce>
            <div className={styles.categories}>
                <div className={styles.col}>
                    <div className={styles.row}>
                        <img
                            src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <button>
                            <Link className="link" to="products/1">
                                Sale
                            </Link>
                        </button>
                    </div>
                    <div className={styles.row}>
                        <img
                            src="https://images.pexels.com/photos/1930645/pexels-photo-1930645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1                        "
                            alt=""
                        />
                        <button>
                            <Link className="link" to="products/2">
                                Woman
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.row}>
                        <img
                            src="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <button>
                            <Link className="link" to="products/3">
                                New Season
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={`${styles.col} ${styles.col_l}`}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.row}>
                                <img
                                    src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                />
                                <button>
                                    <Link className="link" to="products/4">
                                        Men
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.row}>
                                <img
                                    src="https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                />
                                <button>
                                    <Link className="link" to="products/5">
                                        Accessories
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img
                            src=" https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <button>
                            <Link className="link" to="products/6">
                                Shoes
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
export default Categories;
