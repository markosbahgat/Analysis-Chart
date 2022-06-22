import { Routes, Route } from "react-router-dom";
import { DashboardHOC } from "@/HOCs/index";
import Error404 from "@/pages/404";
import School from "./[id]";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHOC />} />
      <Route path="/:id" element={<School />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
export default App;
