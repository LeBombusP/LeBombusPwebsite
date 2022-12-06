import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/authguard";
import "./assets/styles.css";

import App from "./pages/App";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<App/>} path="/" />
        <Route element={<Login/>} path="/login" />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
//TODO: Add this to github
//TODO: Make a readme
//TODO: Make icon
//TODO: Make prettier work properly
//TODO (maybe): Make a NativeScript version
//TODO: Add fontawesome as react icon library