// import PersonPinIcon from "@material-ui/icons/PersonPin";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/authPage/login/LoginPage";
import RegisterPage from "./pages/authPage/SignupPage.jsx/RegisterPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile/:username" element={<Profile />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
