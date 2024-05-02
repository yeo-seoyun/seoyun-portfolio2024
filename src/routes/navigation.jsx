import Mimiworld from "../pages/DetailPage/Mimiworld";
import Muzigae from "../pages/DetailPage/Muzigae";
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
  {
    id: "muzigaemansion",
    path: "/muzigaemansion",
    index: true,
    text: "무지개맨션",
    element: <Muzigae />,
  },
];

export default navigationItems;
