import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/cadastro";
import NavBar from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import { AuthProvider } from "./contexts/AuthContext";
import { ListaTemas } from "./components/ListaTemas/ListaTema";
import FormTema from "./components/formtema/FormTema";
import DeletarTema from "./components/deletartema/DeletarTema";
 
function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastroTema" element={<FormTema />} />
            <Route path="/editarTema/:id" element={<FormTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}
 
export default App;