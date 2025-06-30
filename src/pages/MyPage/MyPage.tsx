import { useState, useEffect } from "react";

import styles from "./MyPage.module.css";
import srymeImg from "@/assets/sryme.png";
import Box from "@/components/Box/Box";
import Battle from "@/components/Battle/Battle";

const getRemainingMinutesToday = () => {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const diffMs = endOfDay.getTime() - now.getTime();
  return Math.ceil(diffMs / 1000 / 60); // 分単位で切り上げ
};

// ユーザー名を取得する関数
// ここでは固定の名前を返すが、実際にはAPIから取得することも可能
const getUserInfo = () => {
  // ここでは固定のユーザー情報を返す
  // 実際のアプリケーションでは、APIからユーザー情報を取得することが一般的
  return { name: "きよまろ", level: 99 };
};

const MyPage = () => {
  // HPの状態を管理するためのuseStateフック
  const [hp, setHp] = useState(getRemainingMinutesToday());
  // ユーザー名を取得
  const userInfo = getUserInfo();

  useEffect(() => {
    const timer = setInterval(() => {
      setHp((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000); // 60000ms = 1分

    return () => clearInterval(timer); // クリーンアップ
  }, []);

  const enemies = [
    { id: 1, imagePath: srymeImg, altText: "スライム" },
    { id: 2, imagePath: srymeImg, altText: "スライム" },
    { id: 3, imagePath: srymeImg, altText: "スライム" },
  ];

  return (
    <div className={styles.ly_content}>
      <div className={styles.ly_member}>
        a<Box userInfo={userInfo} hp={hp}></Box>
      </div>
      <Battle enemies={enemies}></Battle>

      <div className={styles.ly_commandArea}></div>
    </div>
  );
};

export default MyPage;
