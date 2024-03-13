"use client";
import styles from "@/styles/news.module.scss";
import { useState } from "react";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Врятованих усмішок",
    value: "99",
    postfix: "+",
  },
  {
    metric: "Роки досвіду",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Волонтерві зі свього світу",
    value: "121",
    postfix: "+",
  },
];

export default function News() {
  let [back, setBack] = useState(false);
  let [backDown, setBackDown] = useState(false);
  let [backCenter, setBackCenter] = useState(false);
  let [backRight, setBackRight] = useState(false);

  return (
    <>
      <div className={styles.news__container}>
        <div className={styles.numbers}>
          {achievementsList.map((achievement, index) => {
            return (
              <motion.div
                whileHover={{
                  rotate: 35,
                  translateY: 50,
                  transition: { duration: 0.1 },
                }}
                key={index}
                className={styles.block}
              >
                <h2 className={styles.number}>
                  <AnimatedNumbers
                    includeComma={true}
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className={styles.number}
                    transitions={(index) => ({
                      duration: index + 1,
                    })}
                    // configs={(_: any, index: any) => {
                    //   return {
                    //     mass: 1,
                    //     friction: 100,
                    //     tensions: 140 * (index + 1),
                    //   };
                    // }}
                  />
                  {achievement.postfix}
                </h2>
                <p className={styles.text}>{achievement.metric}</p>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.news}>
          <div className={styles.left}>
            <div
              onMouseEnter={() => {
                setBack((back = true));
              }}
              className={styles.up}
            >
              <div
                onMouseLeave={() => {
                  setBack((back = false));
                }}
                className={back ? styles.back : styles.backDis}
              >
                <button className={styles.btn}>Читати більше</button>
              </div>
              <button className={styles.btn}>Стаття</button>
              <div className={styles.text__container}>
                <div className={styles.title}>Чому потрібен реанімобіль?</div>
                <div className={styles.text}>
                  Кваліфікована медична бригада: «на борту» реанімобілю
                  перебуває команда
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setBackDown((backDown = true));
              }}
              className={styles.down}
            >
              <div
                onMouseLeave={() => {
                  setBackDown((backDown = false));
                }}
                className={backDown ? styles.backDown : styles.backDisDown}
              >
                <button className={styles.btn}>Читати більше</button>
              </div>
              <div className={styles.hash}></div>
              <button className={styles.btn}>Стаття</button>
              <div className={styles.text__container}>
                <div className={styles.title}>Історія Артемчика</div>
                <div className={styles.text}>
                  "Нашого сина звати Артемчик. Ми з Вінниці. Страшні слова
                  лікаря про підозру на лейкемію ми почули рік тому, за
                  десять...
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setBackCenter((backCenter = true));
            }}
            className={styles.center}
          >
            <div
              onMouseLeave={() => {
                setBackCenter((backCenter = false));
              }}
              className={backCenter ? styles.backCenter : styles.backDisCenter}
            >
              <button className={styles.btn}>Читати більше</button>
            </div>
            <div className={styles.hearts}></div>
            <button className={styles.btn}>Стаття</button>
            <div className={styles.text__center}>
              <div className={styles.title}>90 ДІТОЧОК!</div>
              <div className={styles.text}>
                На сьогоднішній день через Фонд «Усмішка Тимоші» до Італії...
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setBackRight((backRight = true));
            }}
            className={styles.right}
          >
            <div
              onMouseLeave={() => {
                setBackRight((backRight = false));
              }}
              className={backRight ? styles.backRight : styles.backDisRight}
            >
              <button className={styles.btn}>Читати більше</button>
            </div>
            <button className={styles.btn}>Стаття</button>
            <div className={styles.text__container}>
              <div className={styles.title}>Історія Артемчика</div>
              <div className={styles.text}>
                "Нашого сина звати Артемчик. Ми з Вінниці. Страшні слова лікаря
                про підозру на лейкемію ми почули рік тому, за десять...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
