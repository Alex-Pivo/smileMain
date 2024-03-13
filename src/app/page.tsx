import Image from "next/image";

import Firstblock from "@/pages/firtsBlock";
import News from "@/pages/news";
import Abouthelp from "@/pages/aboutHelp";
import Reviews from "@/pages/reviews";

import styles from "../styles/main.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/logo-head.png"
            width="119"
            height="63"
            alt="Picture of the author"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.nav}>
            <a href="">Головна</a>
            <a href="">Історія фонду</a>
            <a href="">Новини</a>
            <a href="">Звіти</a>
            <a href="">Як допомогти</a>
            <a href="">Контакти</a>
          </div>
          <button className={styles.button}>Допомогти</button>
          <div className={styles.lang}>
            <p>UA</p>
            <div className={styles.ar}></div>
          </div>
        </div>
      </header>

      <Firstblock></Firstblock>
      <News></News>
      <Abouthelp></Abouthelp>
      <Reviews></Reviews>
    </>
  );
}
