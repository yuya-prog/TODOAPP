import styles from "./Battle.module.css";

interface enemy {
  id: number;
  imagePath: string;
  altText: string; // 画像の代替テキスト
}
interface ButtleProps {
  enemies: enemy[]; // Adjust the type as necessary
}

const Battle = ({ enemies }: ButtleProps) => {
  return (
    <div className={styles.ly_buttlebox}>
      {enemies.map((enemy) => (
        <div className={styles.el_buttlebox}>
          <img
            src={enemy.imagePath}
            className={styles.el_imgSize}
            alt={enemy.altText}
          />
        </div>
      ))}
    </div>
  );
};
export default Battle;
