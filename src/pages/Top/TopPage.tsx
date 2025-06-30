import styles from "./TopPage.module.css";

const TopPage = () => {
  return (
    <div className={styles.ly_topPage}>
      <div className={styles.el_fadeInUp}>
        <div className={styles.el_text_center}>
          <h1 className={styles.el_title}>LIFE QUEST</h1>
          <p className={styles.el_subtitle}>～人生を攻略せよ～</p>
        </div>
      </div>
      <div className={`${styles.ly_startButton} ${styles.el_fadeInUp}`}>
        <span className={styles.el_startButton}>冒険を始める</span>
      </div>
    </div>
  );
};
export default TopPage;
