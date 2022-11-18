import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [perfil, setPerfil] = useState([]);
  async function ListaPerfil() {
    const perfilApi = await api.get("/perfil");
    setPerfil(perfilApi.data.objeto);
  }

  useEffect(() => {
    ListaPerfil();
  }, []);

  const colunas = {
    id: "ID",
    descricao: "Descrição",
  };

  const linhas = perfil.map((elemento) => {
    return {
      id: elemento.IDPerfil,
      descricao: elemento.Descricao,
    };
  });

  return (
    <Listagem
      caminhoCriar={"/perfil/criar"}
      caminhoEditar={"/perfil/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo="Perfis"
      handleDelete={async (id) => {
        await api.delete("perfil/delete" + id);
        await ListaPerfil();
      }}
    />
  );
}
