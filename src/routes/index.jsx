import { createBrowserRouter } from "react-router-dom";
import navigationItems from "./navigation";
import Layout from "../Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: navigationItems,
  },
];

const router = createBrowserRouter(routes);

export default router;
