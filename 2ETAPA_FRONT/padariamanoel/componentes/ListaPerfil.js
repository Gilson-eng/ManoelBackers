import { useState, useEffect } from "react";
import api from "../services/api";

const ListaPerfil = () => {
  const [perfil, setPerfil] = useState([]);
  async function buscaPerfil() {
    let resposta = await api.get("/perfil");
    console.log("perfil = ", resposta.data.objeto);
    setPerfil(resposta.data.objeto);
  }

  async function adicionaPerfil() {
    console.log("Adicionando");
    let perfil = {
      IDPerfil: "171",
      Descricao: "Homencida",
    };

    let resposta = await api.post("perfil", perfil);
    console.log("resposta", JSON.stringify(resposta));
    buscaPerfil();
  }

  useEffect(() => {
    buscaPerfil();
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
          {perfil.map((u) => (
            <tr key={u.IDPerfil}>
                <td>{u.IDPerfil}</td>
              <td>{u.Descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={adicionaPerfil}>
        Adicionar Perfil
      </button>
    </>
  );
};

export default ListaPerfil;
