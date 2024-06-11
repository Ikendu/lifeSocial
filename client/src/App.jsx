// import PersonPinIcon from "@material-ui/icons/PersonPin";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginPage from "./pages/authPage/login/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
