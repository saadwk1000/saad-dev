import { RouteConstant } from "./routeConstant";
import Login from "../../pages/login/page";
import type { ComponentType } from "react";
import Portfolio from "../../pages/portfolio-page/page";
import Admin from "../../pages/admin/page";

export type AppRoute = {
  path: string;
  title: string;
  Component: ComponentType;
};

const publicRoute: AppRoute[] = [
  {
    path: RouteConstant.portfolio.path,
    title: RouteConstant.portfolio.title,
    Component: Portfolio,
  },
  {
    path: RouteConstant.login.path,
    title: RouteConstant.login.title,
    Component: Login,
  },
];

const privateRoute: AppRoute[] = [
  {
    path: RouteConstant.admin.path,
    title: RouteConstant.admin.title,
    Component: Admin,
  },
];

export { publicRoute, privateRoute };
