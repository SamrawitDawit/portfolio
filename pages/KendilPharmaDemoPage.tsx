import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../styles/KendilPharmaDemoPage.module.css'; 
import { Navigation, Pagination, Autoplay, FreeMode, } from 'swiper/modules';
const imagePaths = [
  '/kendilPharma-demo/kendilPharma1.png',
  '/kendilPharma-demo/kendilPharma2.png',
  '/kendilPharma-demo/kendilPharma3.png',
  '/kendilPharma-demo/kendilPharma4.png',
];

export default function KendilPharmaDemo() {
  return (
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
            alt={`Kendil Pharma demo ${index + 1}`}
            className={styles.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}