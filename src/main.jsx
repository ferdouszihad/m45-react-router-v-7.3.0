import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Users from "./pages/Users.jsx";
import Error404 from "./pages/Error404.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/*layout*/}
        <Route path="/" element={<App></App>}>
          {/*child routes*/}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
