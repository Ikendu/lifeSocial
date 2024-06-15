// import PersonPinIcon from "@material-ui/icons/PersonPin";

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/authPage/login/LoginPage";
import RegisterPage from "./pages/authPage/SignupPage.jsx/RegisterPage";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

axios.defaults.baseURL = "http://localhost:5000/api";
axios.defaults.withCredentials = true;

function App() {
  // const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
// user ? <Navigate to={`/`} />
export default App;
