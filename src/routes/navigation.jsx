import Mimiworld from "../pages/DetailPage/Mimiworld";
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
  },
  {
    id: "mimiworld",
    path: "/mimiworld",
    index: true,
    text: "미미월드",
    element: <Mimiworld />,
  },
];

export default navigationItems;
