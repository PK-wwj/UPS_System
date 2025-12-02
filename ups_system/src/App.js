import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import EmployeeDashboard from "./pages/EDashboard/EmployeeDashboard";
import CreateShipmentPage from "./pages/CreateShipmentPage/CreateShipmentPage";
import PaymentPage from "./pages/Payment/PaymentPage";
export default function App() {
  console.log("App.js 已加载");
  return (
    <BrowserRouter>
      <Routes>

        {/* 程序进入默认显示 Home */}
        <Route path="/" element={<HomePage />} />

        {/* 登录 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 管理员 Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 员工 Dashboard */}
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />

        {/* 员工 Dashboard */}
        <Route path="/CreateShipment" element={<CreateShipmentPage />} />

        <Route path="/payment" element={<PaymentPage />} />

      </Routes>
    </BrowserRouter>
  );
}
