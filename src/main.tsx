import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../app/page";
import ProjectsPage from "../app/projects/page";
import "../app/globals.css";

const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
const App = pathname === "/projects" ? ProjectsPage : Home;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
