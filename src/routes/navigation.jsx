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
];

export default navigationItems;
