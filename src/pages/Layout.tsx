import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.css";

type LayoutProps = {
  header?: React.ComponentType;
  main: React.ComponentType;
  footer?: React.ComponentType;
};

const Layout = ({ header: Header, main: Main }: LayoutProps) => {
  return (
    <div className={styles.ly_content}>
      {Header && <Header />}
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
