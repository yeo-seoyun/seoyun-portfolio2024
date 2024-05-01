import Nonfiction from "../pages/DetailPage/Nonfiction";
import Home from "../pages/Home";

const navigationItems = [
  {
    id: "home",
    path: "/",
    index: true,
    text: "홈",
    element: <Home />,
    // lazy: () => import("@/pages/Home"),
  },
  {
    id: "nonfiction",
    path: "/nonfiction",
    index: true,
    text: "논픽션",
    element: <Nonfiction />,
    // lazy: () => import("@/pages/Home"),
  },
];

export default navigationItems;
