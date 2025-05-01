import { Navigate, Route, Routes } from 'react-router-dom';
import Budget from '../pages/Budget/Budget';
import Home from '../pages/Home/Home';
import Rewards from '../pages/Rewards/Rewards';
import Tracking from '../pages/Tracking/Tracking';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
