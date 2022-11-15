import { useState, useEffect } from "react";
import api from "../services/api";

const ListaUnidadeMedida = () => {
  const [unidadeMedida, setUnidadeMedida] = useState([]);
  async function buscaUnidadeMedida() {
    let resposta = await api.get("/unidadeMedida");
    console.log("unidadeMedida = ", resposta.data.objeto);
    setUnidadeMedida(resposta.data.objeto);
  }

  async function adicionaUnidadeMedida() {
    console.log("Inserindo");
    let unidadeMedida = {
      IDUnidadeMedida: 3,
      Descricao: "Pacoote",
    };

    let resposta = await api.post("unidadeMedida", unidadeMedida);
    console.log("resposta", JSON.stringify(resposta));
    buscaUnidadeMedida();
  }

  useEffect(() => {
    buscaUnidadeMedida();
  }, []);

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">Usuários</h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {unidadeMedida.map((u) => (
            <tr key={u.IDUnidadeMedida}>
              <td>{u.IDUnidadeMedida}</td>
              <td>{u.Descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={adicionaUnidadeMedida}>
        Adicionar Unidade Medida
      </button>
    </>
  );
};

export default ListaUnidadeMedida;
