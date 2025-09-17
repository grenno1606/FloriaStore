import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";

export const createRouterApp = () => {
  return createBrowserRouter([
    {
      Component: MainLayout,
      children: [{ path: "/", Component: HomePage }],
    },
  ]);
};
