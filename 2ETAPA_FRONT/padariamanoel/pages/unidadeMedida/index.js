import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [unidadeMedida, setUnidadeMedida] = useState([]);
  async function ListaUnidade() {
    const unidadeMedidaApi = await api.get("/unidadeMedida");
    setUnidadeMedida(unidadeMedidaApi.data.objeto);
  }
  useEffect(() => {
    ListaUnidade();
  }, []);

  const colunas = {
    id: "ID",
    descricao: "Descrição",
  };

  const linhas = unidadeMedida.map((elemento) => {
    return {
      id: elemento.IDUnidadeMedida,
      descricao: elemento.Descricao,
    };
  });

  return (
    <Listagem
      caminhoCriar={"/movimento/criar"}
      caminhoEditar={"/movimento/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo="Unidade de Medida"
      handleDelete={async (id) => {
        await api.delete("/movimento/" + id);
        await ListaUnidade();
      }}
    />
  );
}
