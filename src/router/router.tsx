import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom"; //

import Layout from "@/pages/Layout";

import TopPage from "@/pages/Top/TopPage";
import MyPage from "../pages/MyPage/MyPage";

// ✅ これは RouteObject[] 型
const routes: RouteObject[] = [
  { path: "/", element: <Layout main={TopPage} /> },
  { path: "/mypage", element: <Layout main={MyPage} /> },
];

const AppRouter = createBrowserRouter(routes);

export default AppRouter;
