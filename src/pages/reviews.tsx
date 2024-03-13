"use client";
import styles from "../styles/reviews.module.scss";
import React from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/css/reviewsSwipe.css";

export default function Reviews() {
  let [slide, setSlide] = useState(false);
  const swiper = useSwiper();

  // let activeSlide = document.getElementById("activeSlide1");
  // if (activeSlide?.classList.contains("slideActive")) {
  //   setSlide((slide = true));
  //   console.log("slide active!");
  // }

  return (
    <>
      <div className={styles.reviews}>
        <div className={styles.container}>
          <div className={styles.title__container}>
            <h3 className={styles.title}>03 Відгуки</h3>
            <p className={styles.text}>
              Лікування в одній із найкращих клінік Європи (Італія) залишило в
              наших серцях глибоки
            </p>
          </div>
          <div className={styles.main}>
            <div className={styles.slider}>
              <Swiper
                navigation={true}
                slidesPerView={4}
                spaceBetween={40}
                modules={[Navigation]}
                className="mySwiper newsSlider"
              >
                <SwiperSlide className="slideActive slideNot">
                  <div className={styles.slide}>
                    <div className={styles.talk}></div>
                    <div className={styles.info}>
                      <p className={styles.text}>
                        Ми вчора пройшли перший курс хімії. Сьогодні нас
                        виписали,живемо в готелі.
                      </p>
                      <div className={styles.user}>
                        <div className={styles.avatar}></div>
                        <div className={styles.box}>
                          <p className={styles.name}>Viktoria Tore</p>
                          <p className={styles.date}>20.06</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.video}>
                      <div className={styles.play}></div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide id="activeSlide1" className="slideActive slideNot">
                  <div className={styles.slideNot}>
                    <p className={styles.text}>
                      Рома після операції, замінили частину кістки на протез,
                      робить самостійні кроки. Дякую вам за допомогу.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  <div className={styles.slideNot}>
                    <p className={styles.text}>
                      Дякую Вам за підтримку, допомогу, що відгукнулися, Ви
                      зробили те, в що повірити важко , що це можливо в такий
                      короткий термін.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  Slide 4
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  Slide 5
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  Slide 6
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  Slide 7
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  Slide 8
                </SwiperSlide>
                <SwiperSlide className="slideActive slideNot">
                  Slide 9
                </SwiperSlide>
                {/* <div className={styles.btns__container}>
                  <button
                    className={styles.prev}
                    onClick={() => swiper.slidePrev()}
                  >
                    <div className={styles.arrow}></div>
                  </button>
                  <button
                    className={styles.next}
                    onClick={() => swiper.slideNext()}
                  >
                    <div className={styles.arrow}></div>
                  </button>
                </div> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
