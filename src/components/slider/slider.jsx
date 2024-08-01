// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./slider.module.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { workers } from '@/lib/data';
import Image from 'next/image';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}

        >
            {workers.map((worker, i) => {
                return (
                    <SwiperSlide key={i} style={{ height: "fit-content", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "50px",background:"wheat" ,borderRadius:"10px",zIndex:'1'}}>
                        <div className={styles.img}>
                            <Image src={worker.img} alt="" style={{ borderRadius: "100%", objectFit: "cover", objectPosition: 'center' }} width={200} height={200} unoptimized />
                        </div>
                        <div className={styles.reviewDetails}>
                            <h2 className={styles.name}>{worker.name}</h2>
                            <h4 className={styles.occupation}>{worker.occupation}</h4>
                            <p className={styles.review}><span className={styles.qoute}> "  </span> {worker.review} <span className={styles.qoute}>   "</span></p>
                        </div>
                    </SwiperSlide>
                )
            })}


        </Swiper>
    );
};