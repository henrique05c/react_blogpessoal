import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type Tema from "../../models/tema";
import { atualizar, buscar, cadastrar } from "../../services/Service";
 
function FormTema() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = id !== undefined;
 
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tema, setTema] = useState<Tema>({ id: 0, descricao: "" });
 
  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token, navigate]);
 
  useEffect(() => {
    if (isEditing) {
      buscarTema();
    }
  }, [id]);
 
  async function buscarTema() {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }
 
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({ ...tema, [e.target.name]: e.target.value });
  }
 
  async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
 
    try {
      if (isEditing) {
        await atualizar(`/temas`, tema, setTema, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Tema atualizado com sucesso!");
      } else {
        await cadastrar(`/temas`, tema, setTema, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Tema cadastrado com sucesso!");
      }
      navigate("/temas");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        alert("Erro ao salvar o tema!");
      }
    }
 
    setIsLoading(false);
  }
 
  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {isEditing ? "Editar Tema" : "Cadastrar Tema"}
      </h1>
 
      <form
        className="flex flex-col w-1/2 gap-4"
        onSubmit={gerarNovoTema}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Tema</label>
          <input
            type="text"
            placeholder="Descreva aqui seu tema"
            name="descricao"
            id="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          type="submit"
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                     flex justify-center py-2"
        >
          {isLoading ? (
            <ClipLoader color="white" size={24} />
          ) : (
            <span>{isEditing ? "Editar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}
 
export default FormTema;