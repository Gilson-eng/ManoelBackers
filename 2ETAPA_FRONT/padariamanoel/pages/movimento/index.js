import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [movimento, setMovimento] = useState([]);
  async function ListaMovimento() {
    const movimentoApi = await api.get("/movimento");
    setMovimento(movimentoApi.data.objeto);
  }

  useEffect(() => {
    ListaMovimento();
  }, []);

  const colunas = {
    id: "ID Movimento",
    descricao: "Descrição",
    tipo: "Tipo",
    dataMovimento: "Data do Movimento",
    valor: "Valor",
    usuario: "Usuário",
  };

  const linhas = movimento.map((elemento) => {
    return {
      id: elemento.IDMovimento,
      descricao: elemento.Descricao,
      tipo: elemento.Tipo,
      dataMovimento: elemento.DataMovimento,
      valor: elemento.Valor,
      usuario: elemento.Usuario,
    };
  });

  return (
    <Listagem
      caminhoCriar={"movimento/criar"}
      caminhoEditar={"movimento/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo="Movimentos"
      handleDelete={async (id) => {
        await api.delete("/movimento" + id);
        await ListaMovimento();
      }}
    />
  );
}
