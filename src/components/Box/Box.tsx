import styles from "./Box.module.css";

type BoxProps = {
  userInfo: {
    name: string;
    level: number;
  };
  hp: number;
};

const Box = ({ userInfo, hp }: BoxProps) => {
  // HPの状態を管理するためのuseStateフックは
  // MyPageコンポーネントで行うため、ここではpropsとして受け取る
  // ここでは、HPの値を直接表示するだけで、更新はMyPageコンポーネントで行う
  return (
    <div className={`${styles.bl_small} ${styles.bl_box}`}>
      <div className={styles.boxTableWrapper}>
        <table className={styles.bl_table}>
          <tbody>
            <tr className={styles.bl_tableRow}>
              <th></th>
              <td className={styles.bl_tableCell}>{userInfo.name}</td>
            </tr>
            <tr className={styles.bl_tableRow}>
              <th>Lv</th>
              <td className={styles.bl_tableCellRight}>{userInfo.level} </td>
            </tr>
            <tr className={styles.bl_tableRow}>
              <th>HP</th>
              <td className={styles.bl_tableCellRight}>{hp} </td>
            </tr>
            <tr className={styles.bl_tableRow}>
              <th>MP</th>
              <td className={styles.bl_tableCellRight}>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Box;
