import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { DashboardHOC } from "HOCs";
import Error404 from "pages/404";
import School from "./[id]";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/SignIn");
    if (location.pathname === "/SignIn" && localStorage.getItem("token")) {
      navigate("/");
    }
  }, [location.pathname, navigate]);
  return (
    <Routes>
      <Route path="/" element={<DashboardHOC />} />
      <Route path="/:id" element={<School />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
export default App;
