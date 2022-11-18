import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [usuarios, setUsuarios] = useState([]);
  async function ListaUsuarios() {
    const usuarioApi = await api.get("/usuario");
    setUsuarios(usuarioApi.data.objeto);
  }
  useEffect(() => {
    ListaUsuarios();
  }, []);
  const colunas = {
    id: "ID",
    nome: "Nome",
    login: "Login",
    senha: "Senha",
    status: "Status",
    acoes: "Ações",
  };

  const linhas = usuarios.map((elemento) => {
    return {
      id: elemento.IDUsuario,
      nome: elemento.Nome,
      login: elemento.Login,
      senha: elemento.Senha,
      status: elemento.Status,
    };
  });
  return (
    <Listagem
      caminhoCriar={"/usuario/criar"}
      caminhoEditar={"/usuario/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo = "Usuários"
      handleDelete={async (id) => {
        await api.delete("/usuario/" + id);
        await ListaUsuarios();
      }}
    />
  );
}
