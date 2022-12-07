import React from 'react';
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "../components/authguard";

import App from "../pages/App";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/Error";
 

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<App/>} path="/" />
        <Route element={<Login/>} path="/login" />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
