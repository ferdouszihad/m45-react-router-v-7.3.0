import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import Error404 from "../pages/Error404";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <h1>Loading...</h1>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/users",
        Component: Users,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/user-details/:id",
        Component: UserDetail,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);

export default routes;
