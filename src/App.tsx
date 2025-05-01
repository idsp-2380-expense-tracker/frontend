import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Home from "./pages/Home/Home";
import Tracking from "./pages/Tracking/Tracking";
import Budget from "./pages/Budget/Budget";
import Rewards from "./pages/Rewards/Rewards";
import "../src/styles/App.scss";

export default function App() {
  const location = useLocation();
  const path = location.pathname;

  const showNavBarRoutes = ["/home", "/tracking", "/budget", "/rewards"];
  const showNavBar = showNavBarRoutes.includes(path);
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Tracking />} />
        <Route path="/home" element={<Budget />} />
        <Route path="/home" element={<Rewards />} />
      </Routes>
      {showNavBar && <NavBar />}
    </>
  );
}
