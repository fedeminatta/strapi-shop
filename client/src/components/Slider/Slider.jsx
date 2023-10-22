import styles from './Slider.module.sass';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ];

    const lastIndex = data.length - 1;
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? lastIndex : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === lastIndex ? 0 : (prev) => prev + 1);
    };

    return (
        <div className={styles.slider}>
            <div
                className={styles.container}
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((item, index) => (
                    <img src={item} alt="" key={index} />
                ))}
            </div>
            <div className={styles.icons}>
                <div className={styles.icon} onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className={styles.icon} onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
};
export default Slider;
