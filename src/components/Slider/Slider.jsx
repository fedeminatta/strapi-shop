import styles from './Slider.module.sass';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';
import person1 from '../../../public/img/person1.png';
import person2 from '../../../public/img/person2.png';
import person3 from '../../../public/img/person3.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [person2, person1, person3];

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
