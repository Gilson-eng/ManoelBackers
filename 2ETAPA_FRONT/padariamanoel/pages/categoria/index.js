import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [categoria, setCategoria] = useState([]);
  async function ListaCategoria() {
    const categoriaApi = await api.get("/categoria");
    setCategoria(categoriaApi.data.objeto);
  }
  useEffect(() => {
    ListaCategoria();
  }, []);

  const colunas = {
    id: "ID",
    descricao: "Descrição",
  };

  const linhas = categoria.map((elemento) => {
    return {
      id: elemento.IDCategoria,
      descricao: elemento.Descricao,
    };
  });

  return (
    <Listagem
      caminhoCriar={"categoria/criar"}
      caminhoEditar={"categoria/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo="Categoria"
      handleDelete={async (id) => {
        await api.delete("/categoria/" + id);
        await ListaCategoria();
      }}
    />
  );
}
