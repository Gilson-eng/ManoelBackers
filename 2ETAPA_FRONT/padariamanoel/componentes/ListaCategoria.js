import { useState, useEffect } from "react";
import api from "../services/api";

const ListaCategoria = () => {
  const [categoria, setCategoria] = useState([]);
  async function buscaCategoria() {
    let resposta = await api.get("/categoria");
    console.log("categoria = ", resposta.data.objeto);
    setCategoria(resposta.data.objeto);
  }

  async function adicionaCategoria() {
    console.log("Inserindo");
    let categoria = {
      IDCategoria: "Vestuário",
      Descricao: "Firula",
    };

    let resposta = await api.post("/categoria", categoria);
    console.log("resposta", JSON.stringify(resposta));
    buscaCategoria();
  }

  useEffect(() => {
    buscaCategoria();
  }, []);

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">Categoria</h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {categoria.map((u) => (
            <tr key={u.IDCategoria}>
                <tr>{u.IDCategoria}</tr>
              <td>{u.Descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={adicionaCategoria}>
        Adicionar Categoria
      </button>
    </>
  );
};

export default ListaCategoria;
