import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Listagem from "../../componentes/Listagem/listagem";

export default function Index() {
  const [produtos, setProdutos] = useState([]);
  async function ListaProdutos() {
    const produtosApi = await api.get("/produtos");
    setProdutos(produtosApi.data.objeto);
  }
  useEffect(() => {
    ListaProdutos();
  }, []);

  const colunas = {
    id: "ID",
    descricao: "Descrição",
    iDCategoria: "ID Categoria",
    codigoDeBarras: "Código de Barras",
    quantidade: "Quantidade",
    quantidadeMinima: "Quantidade Minima",
    valorUnitario: "Valor Unitário",
    acoes: "Ações",
  };

  const linhas = produtos.map((elemento) => {
    return {
      id: elemento.IDProduto,
      descricao: elemento.Descricao,
      idCategoria: elemento.IDCategoria,
      codigoDeBarras: elemento.CodigoDeBarras,
      quantidade: elemento.Quantidade,
      quantidadeMinima: elemento.QuantidadeMinima,
      valorUnitario: elemento.ValorUnitario,
    };
  });

  return (
    <Listagem
      caminhoCriar={"/produtos/criar"}
      caminhoEditar={"/produtos/editar/:id"}
      colunas={colunas}
      linhas={linhas}
      titulo = "Produtos"
      handleDelete={async (id) => {
        await api.delete("/produtos/" + id);
        await ListaProdutos();
      }}
    />
  );
}
