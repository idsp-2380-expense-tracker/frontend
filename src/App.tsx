import { useEffect, useState } from "react";
import { useAuthService } from "./services/authService";
import { userDataService } from "./services/userDataService";
import { Routes, Route, useLocation } from "react-router-dom";
// import AppRouter from "./routes/AppRouter";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Tracking from "./pages/Tracking/Tracking";
import Budget from "./pages/Budget/Budget";
import Rewards from "./pages/Rewards/Rewards";
import "./styles/App.scss";

export default function App() {
  const { isSignedIn, openSignIn } = useAuthService();
  const [dataLoaded, setDataLoaded] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const showNavBarRoutes = ["/home", "/tracking", "/budget", "/rewards"];
  const showNavBar = showNavBarRoutes.includes(path);

  useEffect(() => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    userDataService.clearCache();
    userDataService
      .fetchUserData()
      .then(() => setDataLoaded(true))
      .catch(console.error);
  }, [isSignedIn, openSignIn]);

  if (!isSignedIn) {
    return null;
  }

  if (!dataLoaded) {
    return <div>Loading data…</div>;
  }

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
      {showNavBar && <NavBar />}
      {/* <AppRouter /> */}
    </>
  );
}
