import React from "react";
import PreparaDados from "./FormularioUsuario";
import api from "../../services/api";

export default function criar() {
  async function handleSubmit(values) {
    try {
      if (values.IDPerfil <= 0) {
        alert("Selecione o Perfil!");
        return;
      }
      await api.post("/usuario", values);
      alert("Usuário inserido com sucesso");
    } catch (err) {
      alert("Falha ao inserir usuário");
    }
  }

  return <PreparaDados titulo="Criar usuário" handleSubmit={handleSubmit} />;
}
