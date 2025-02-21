import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/watch/:id" element={<HomePage />} />
    <Route path="/search" element={<HomePage />} />
    <Route path="/history" element={<HomePage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
}

