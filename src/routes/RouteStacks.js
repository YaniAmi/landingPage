import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// pages
const Page404 = lazy(() => import("../pages/404"));
const Home = lazy(() => import("../pages/Home"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../pages/Profile"));

const RouteStacks = () => {
  const loggedIn = () => false;
  return (
    <Routes>
      <Route exact path={"/"} element={<Navigate to={"/home"} />} />

      <Route path={"/home"} element={<Home />} />
      <Route path={"/register"} element={<Register />} />
      <Route
        path={"/profile"}
        element={
          <PrivateRoute path={"/profile"} allow={[loggedIn]} navigateTo={"/"}>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* keep  <Route path="*"> being the last of siblings */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
export default RouteStacks;
