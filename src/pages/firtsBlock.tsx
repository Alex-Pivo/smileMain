"use client";
import styles from "../styles/main.module.scss";
import { useState } from "react";

import Slider from "@/pages/slider";

function selectClick(x: string) {
  document.getElementById(x)?.classList.toggle("active");
}

export default function Firstblock() {
  let [btn, setBtn] = useState(false);
  let [btnTwo, setBtnTwo] = useState(false);
  let [btnThree, setBtnThree] = useState(false);
  let [btnFour, setBtnFour] = useState(false);
  let [btnFive, setBtnFive] = useState(false);
  let [btnSix, setBtnSix] = useState(false);

  let [mouse, setMouse] = useState(true);

  const blocks = [
    {
      id: 1,
      suma: "150 UAH",
    },
    {
      id: 2,
      suma: "300 UAH",
    },
    {
      id: 3,
      suma: "500 UAH",
    },
    {
      id: 4,
      suma: "1000 UAH",
    },
    {
      id: 5,
      suma: "5000 UAH",
    },
    {
      id: 6,
      suma: "Інша сума",
    },
  ];

  return (
    <>
      <div className={styles.firstBlock}>
        <Slider></Slider>
        <div className={styles.info}>
          <div className={styles.info__container}>
            <div
              onMouseEnter={() => {
                setMouse((mouse = false));
              }}
              onMouseLeave={() => {
                setMouse((mouse = true));
              }}
              className={styles.zone}
            >
              <div className={styles.circle}>
                <a href="">Читати історію Миколи</a>
              </div>
            </div>
            <p className={mouse ? styles.myk : styles.mykDis}>
              Микола <br /> 4 роки
            </p>
            <div className={styles.text}>
              <div className={styles.line}></div>
              <h1 className={styles.title}>
                Допомагаємо онкохворим діткам України!
              </h1>
              <h3 className={styles.description}>
                Християнський благодійний фонд в пам'ять Тимоші Санька
              </h3>
            </div>

            <form action="" method="post" className={styles.help}>
              <p className={styles.title}>
                <span>Разова домога</span> /Щомісячна допомога
              </p>
              <div className={styles.summa}>
                <p className={styles.label}>Оберіть суму разового внеску</p>
                <div className={styles.container}>
                  <div
                    onClick={() => {
                      setBtn((btn = true));
                      setBtnTwo((btnTwo = false));
                      setBtnThree((btnThree = false));
                      setBtnFour((btnFour = false));
                      setBtnFive((btnFive = false));
                      setBtnSix((btnSix = false));
                    }}
                    className={btn ? styles.blockActive : styles.block}
                  >
                    150 UAH
                  </div>
                  <div
                    onClick={() => {
                      setBtn((btn = false));
                      setBtnTwo((btnTwo = true));
                      setBtnThree((btnThree = false));
                      setBtnFour((btnFour = false));
                      setBtnFive((btnFive = false));
                      setBtnSix((btnSix = false));
                    }}
                    className={btnTwo ? styles.blockActive : styles.block}
                  >
                    300 UAH
                  </div>
                  <div
                    onClick={() => {
                      setBtn((btn = false));
                      setBtnTwo((btnTwo = false));
                      setBtnThree((btnThree = true));
                      setBtnFour((btnFour = false));
                      setBtnFive((btnFive = false));
                      setBtnSix((btnSix = false));
                    }}
                    className={btnThree ? styles.blockActive : styles.block}
                  >
                    500 UAH
                  </div>
                  <div
                    onClick={() => {
                      setBtn((btn = false));
                      setBtnTwo((btnTwo = false));
                      setBtnThree((btnThree = false));
                      setBtnFour((btnFour = true));
                      setBtnFive((btnFive = false));
                      setBtnSix((btnSix = false));
                    }}
                    className={btnFour ? styles.blockActive : styles.block}
                  >
                    1000 UAH
                  </div>
                  <div
                    onClick={() => {
                      setBtn((btn = false));
                      setBtnTwo((btnTwo = false));
                      setBtnThree((btnThree = false));
                      setBtnFour((btnFour = false));
                      setBtnFive((btnFive = true));
                      setBtnSix((btnSix = false));
                    }}
                    className={btnFive ? styles.blockActive : styles.block}
                  >
                    3000 UAH
                  </div>
                  <div
                    onClick={() => {
                      setBtn((btn = false));
                      setBtnTwo((btnTwo = false));
                      setBtnThree((btnThree = false));
                      setBtnFour((btnFour = false));
                      setBtnFive((btnFive = false));
                      setBtnSix((btnSix = true));
                    }}
                    className={btnSix ? styles.blockActive : styles.block}
                  >
                    Інша сума
                  </div>
                </div>
              </div>
              <input
                type="text"
                className={btnSix ? styles.inputActive : styles.input}
              />
              <div className={styles.btn__container}>
                <button className={styles.btn}>Продовжити</button>
                <div className={styles.description}>
                  <div className={styles.star}></div>
                  <p>Допомагати щомiсячно — кожен день рятувати життя дiтям</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.cartoons}></div>
      </div>
    </>
  );
}
