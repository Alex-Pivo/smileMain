import styles from "../styles/abouthelp.module.scss";

export default function Abouthelp() {
  return (
    <>
      <div className={styles.abouthelp}>
        <div className={styles.container}>
          <div className={styles.title__container}>
            <div className={styles.line}></div>
            <h3 className={styles.title}>Чим ми допомагаємо?</h3>
            <p className={styles.text}>
              Усмішка Тимоші - християнський благодійний фонд в пам'ять Тимоші
              Санька. Засновниками фонду є батьки Тимоші - Юрій та Юлія Санько.
            </p>
          </div>

          <div className={styles.about__container}>
            <div className={styles.up}>
              <div className={styles.left}>
                <div className={styles.info}>
                  <p className={styles.title}>01 Евакуація</p>
                  <p className={styles.description}>
                    БО “Усмішка Тимоші” прагне евакуювати якнайбільшу кількість
                    онкохворих дітей на лікування до Італії. Там вони зможуть
                    отримати кваліфіковану допомогу в найкращих умовах.
                  </p>
                  <div className={styles.btns}>
                    <div className={styles.btnOne}>
                      <div className={styles.marker}></div>
                      Підтримка на шляху
                    </div>
                    <div className={styles.btnTwo}>
                      <div className={styles.marker}></div>
                      Супровід в Італії
                    </div>
                  </div>
                  <button className={styles.btn}>
                    <div className={styles.arrow}></div>
                    Дізнатися більше
                  </button>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.fire}></div>
              </div>
            </div>
            <div className={styles.down}>
              <div className={styles.left}>
                <div className={styles.star}></div>
              </div>
              <div className={styles.right}>
                <div className={styles.info}>
                  <p className={styles.title}>02 Будівництво лікарні</p>
                  <p className={styles.description}>
                    Лікування в одній із найкращих клінік Європи (Італія)
                    залишило в наших серцях глибокий відбиток. У нас зародилася
                    мрія та новий сенс життя. Саме тому ми розпочали будівництво
                    сучасної онколікарні!
                  </p>
                  <button className={styles.btn}>
                    <div className={styles.arrow}></div>
                    Дізнатися більше
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
