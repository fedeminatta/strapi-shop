import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './FeaturedProducts.module.sass';
import axios from 'axios';

const FeaturedProducts = ({ type }) => {
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 1',
            isNew: true,
            oldPrice: 19,
            price: 15,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Producto 2',
            isNew: false,
            oldPrice: 18,
            price: 12,
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 3',
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 3',
            isNew: true,
            oldPrice: 22,
            price: 17,
        },
    ];

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;
        const apiToken = import.meta.env.VITE_API_TOKEN;
        const fetchData = async () => {
            try {
                const date = await axios.get(apiUrl + '/products', {
                    headers: {
                        Authorization: 'bearer ' + apiToken,
                    },
                });
                console.log(date);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.featuredProducts}>
            <div className={styles.top}>
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt natus expedita, cupiditate illo quaerat modi
                    provident rem odit voluptates quidem qui laudantium, quam
                    earum unde at harum animi facilis quo?
                </p>
            </div>
            <div className={styles.bottom}>
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
