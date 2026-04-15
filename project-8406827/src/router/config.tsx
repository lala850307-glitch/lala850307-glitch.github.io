import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Project from "../pages/project/page";
import RealEstate from "../pages/project/real-estate/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/project/real-estate",
    element: <RealEstate />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
