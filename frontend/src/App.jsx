import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* ✅ Default route fix */}
    //     <Route path="/" element={<Navigate to="/admin/login" />} />

    //     <Route path="/admin/login" element={<AdminLogin />} />

    //     <Route
    //       path="/admin/dashboard"
    //       element={
    //         <ProtectedRoute>
    //           <AdminDashboard />
    //         </ProtectedRoute>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>
    // <><Home/></>
    <></>
  );
}

export default App;