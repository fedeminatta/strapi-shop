import styles from './List.module.sass';
import Card from '../Card/Card';

const List = () => {
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
            id: 8,
            img: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 8',
            isNew: true,
            oldPrice: 22,
            price: 17,
        },
        {
            id: 7,
            img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 7',
            isNew: true,
            oldPrice: 19,
            price: 15,
        },
        {
            id: 6,
            img: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Producto 6',
            isNew: false,
            oldPrice: 18,
            price: 12,
        },
        {
            id: 5,
            img: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 5',
            isNew: true,
            oldPrice: 20,
            price: 10,
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Producto 4',
            isNew: true,
            oldPrice: 22,
            price: 17,
        },
    ];

    return (
        <div className={styles.list}>
            {data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
};
export default List;
