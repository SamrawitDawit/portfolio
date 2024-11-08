import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../styles/MemoireDemoPage.module.css'; 
import { Navigation, Pagination, Autoplay, FreeMode, } from 'swiper/modules';
const imagePaths = [
  '/memoire-demo/memoire2.jpg',
  '/memoire-demo/memoire3.jpg',
  '/memoire-demo/memoire4.jpg',
  '/memoire-demo/memoire5.jpg',
  '/memoire-demo/memoire6.jpg',
  '/memoire-demo/memoire7.jpg',
];

export default function MemoireSlider() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
    <Swiper
        spaceBetween={30} 
        slidesPerView={3} 
        loop={true} 
        autoplay={{
          delay: 1.5, 
          pauseOnMouseEnter: true,
        }}
        speed={4000} 
        freeMode={true}
        modules={[Navigation, Pagination, Autoplay, FreeMode]}>
      {imagePaths.map((path, index) => (
        <SwiperSlide key={index}>
          <img
            src={path}
            alt={`Memoire demo ${index + 1}`}
            className={styles.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
}