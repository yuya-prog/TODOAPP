import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.ly_header}>
      <div className={styles.ly_header__inner}>
        <div className={styles.bl_header__logo}>
          <span>LIFE QUEST</span>
          <span>~人生を攻略せよ~</span>
        </div>
        <div className={styles.bl_header_help}>
          <a href="#" className={styles.el_header_link}>
            戦い方マニュアル
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
