import styles from './Footer.module.sass';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.item}>
                    <h3>Categories</h3>
                    <span>Women</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className={styles.item}>
                    <h3>Links</h3>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className={styles.item}>
                    <h3>About</h3>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta iste voluptates ipsa nobis quasi autem sapiente
                        modi earum, quia, quas ipsum! Eligendi, odit numquam.
                        Assumenda, sequi ab. Saepe, nisi iure.
                    </span>
                </div>
                <div className={styles.item}>
                    <h3>Contact</h3>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta iste voluptates ipsa nobis quasi autem sapiente
                        modi earum, quia, quas ipsum! Eligendi, odit numquam.
                        Assumenda, sequi ab. Saepe, nisi iure.
                    </span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <span className={styles.logo}>Lamastore</span>
                    <span className={styles.copyright}>
                        © Copyright 2021. All Rights Reserved
                    </span>
                </div>
                <div className={styles.right}>
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </footer>
    );
};
export default Footer;
