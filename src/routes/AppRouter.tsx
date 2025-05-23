import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ApiService } from '../services/apiService';
import { useAuthService } from '../services/authService';
import { userDataService } from '../services/userDataService';

import Budget from '../pages/Budget/Budget';
import Home from '../pages/Home/Home';
import Loading from '../pages/Loading/Loading';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Rewards from '../pages/Rewards/Rewards';
import Splash from '../pages/Splash/Splash';
import Tracking from '../pages/Tracking/Tracking';

export default function AppRouter() {
  const { getToken, isSignedIn } = useAuthService();
  const [dataLoaded, setDataLoaded] = useState(false);
  const routeStage =
    !isSignedIn ? "guest":
    !dataLoaded ? "loading" : "authenticated";

    useEffect(() => {
      ApiService.setToken(getToken);
    }, [getToken]);

    useEffect(() => {
      if (routeStage === 'loading') {
        userDataService.clearCache();
        userDataService
          .fetchUserData()
          // .then(() => userDataService.syncLoginStreak(user))
          .then(() => setDataLoaded(true))
          .catch((error) => {
            console.error("Failed to load user data:", error);
          });
      }
    }, [routeStage, getToken]);
  
  return (
    <Routes>
      {routeStage === "guest" && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="*" element={<Navigate to="/splash" replace />} />
        </>
      )}

      {routeStage === "loading" && (
        <Route path="*" element={<Loading />} />
      )}

      {routeStage === "authenticated" && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </>
      )}
    </Routes>
  );
}