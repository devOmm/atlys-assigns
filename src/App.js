import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import HomeRegisterModal from "./component/home_register_modal";
import Login from "./component/login";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home-register-modal" element={<HomeRegisterModal />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <HomeRegisterModal /> */}
      {/* <Home /> */}
    </>
  );
}
