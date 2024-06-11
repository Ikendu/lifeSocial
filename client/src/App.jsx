// import PersonPinIcon from "@material-ui/icons/PersonPin";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
