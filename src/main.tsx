import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import "./assets/styles.css";
import AnimatedRoutes from "./components/animatedRoutes";

 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AnimatedRoutes />
    </Router>
  </React.StrictMode>
);
//TODO: Make theme context
//TODO: move backend to a separate branch
//TODO: Make a proper 404 page
//TODO: Fix spaghetti code by using typescript
//TODO: Make prettier work properly
//TODO (maybe): Make a NativeScript version