import { Navigate, Route, Routes } from "react-router-dom";
import Budget from "../pages/Budget/Budget";
import Home from "../pages/Home/Home";
import Loading from "../pages/Loading/Loading";
import Profile from "../pages/Profile/Profile";
import Rewards from "../pages/Rewards/Rewards";
import Splash from "../pages/Splash/Splash";
import Tracking from "../pages/Tracking/Tracking";
import Login from "../pages/Login/Login";
import MyAccount from "../pages/Profile/MyAccount";

export default function AppRouter() {
  return (
    <Routes>
      {/* main pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/rewards" element={<Rewards />} />

      <Route path="/splash" element={<Splash />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  );
}
