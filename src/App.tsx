import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/cadastro";
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className=" min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;