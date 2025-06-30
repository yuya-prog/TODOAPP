import { RouterProvider } from "react-router-dom";
import router from "@/router/router.tsx";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appWrapper}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
