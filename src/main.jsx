import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Users from "./pages/Users.jsx";

import Error404 from "./pages/Error404.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import routes from "./routes/routes.jsx";

// eslint-disable-next-line no-unused-vars
const declarativeRouter = (
  <BrowserRouter>
    <Routes>
      {/*layout*/}
      <Route path="/" element={<App></App>}>
        {/*child routes*/}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route
          path="/user-details/:id"
          element={<UserDetail></UserDetail>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
