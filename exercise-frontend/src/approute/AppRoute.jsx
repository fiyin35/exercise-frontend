import React from "react";
import { Route, Routes } from "react-router-dom";
import { LINKS } from "../links/index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Books from "../pages/Books";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path={LINKS.LOGIN} element={<Login />} />
        <Route path={LINKS.REGISTER} element={<Register />} />
        <Route path={LINKS.BOOK} element={<Books />} />
      </Routes>
    </>
  );
};

export default AppRoute;
