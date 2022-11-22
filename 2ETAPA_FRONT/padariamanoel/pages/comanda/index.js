import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [comanda, setComanda] = useState([]);
  async function ListaComanda() {
    const comandaApi = await api.get("/comanda");
    setComanda(comandaApi.data.objeto);
  }

  useEffect(() => {
    ListaComanda();
  }, []);

  const colunas = {
    id: "Id",
    dateComanda: "Data Comanda",
    quantidadeItem: "Quantidade",
    valorUnitarioItem: "Valor Unitário",
    descricaoProduto: "Descrição",
    descricaoCategoria: "Descrição",
  };

  const linhas = comanda.map((elemento) => {
    return {
      id: elemento.idComanda,
      dateComanda: elemento.dateComanda,
      quantidadeItem: elemento.quantidadeItem,
      valorUnitarioItem: elemento.valorUnitarioItem,
      descricaoProduto: elemento.descricaoProduto,
      descricaoCategoria: elemento.descricaoCategoria,
    };
  });

  return (
    <Listagem
      caminhoCriar={"/comanda/criar"}
      caminhoEditar={"/comanda/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo="Comandas"
      handleDelete={async (id) => {
        await api.delete("/comanda/" + id);
        await ListaComanda();
      }}
    />
  );
}
