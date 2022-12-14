import React from "react";
import { useHistory, useParams } from "react-router-dom";
import TemplateForm from "../../componentes/Formulario/templateForm";
import FormMovimento from "../../componentes/Formulario/movimentoForm";
import api from "../services/api";

export default function MovimentosEditar() {

    const navigate = useHistory();
    const { id } = useParams();

    async function handleSubmit(values) {
        try {
            await api.put("editarMovimento/" + id, values);
            alert("Movimento editado com sucesso");
            navigate.push("/movimento");
        } catch (err) {
            console.log(err);
            alert("Falha ao editar movimento, tente novamente mais tarde");
        }
    }
    
    return (
        <TemplateForm titulo="Editar movimento">
            <FormMovimento 
                id={id}
                handleSubmit={handleSubmit}
            />
        </TemplateForm>
    );
}