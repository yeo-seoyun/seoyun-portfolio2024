import Bluesquare from "../pages/DetailPage/Bluesquare";
import BlushBanner from "../pages/DetailPage/BlushBanner";
import HandcreamBanner from "../pages/DetailPage/HandcreamBanner";
import InitialLogo from "../pages/DetailPage/InitialLogo";
import Luvistrue from "../pages/DetailPage/Luvistrue";
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
  {
    id: "luvistrue",
    path: "/luvistrue",
    index: true,
    text: "러브이즈트루",
    element: <Luvistrue />,
  },
  {
    id: "initiallogo",
    path: "/initiallogo",
    index: true,
    text: "이니셜로고",
    element: <InitialLogo />,
  },
  {
    id: "fittingblushbanner",
    path: "/fittingblushbanner",
    index: true,
    text: "블러셔배너",
    element: <BlushBanner />,
  },
  {
    id: "handcreambanner",
    path: "/handcreambanner",
    index: true,
    text: "핸드크림배너",
    element: <HandcreamBanner />,
  },
  {
    id: "bluesquare",
    path: "/bluesquare",
    index: true,
    text: "블루스퀘어모바일",
    element: <Bluesquare />,
  },
];

export default navigationItems;
