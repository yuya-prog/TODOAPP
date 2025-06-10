import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.ly_footer}>
      <div className={styles.ly_footer_inner}>
        <span className={styles.el_text_center}>
          &copy; {new Date().getFullYear()} yuya-prog.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
