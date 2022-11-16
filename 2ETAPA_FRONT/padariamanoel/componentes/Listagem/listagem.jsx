import React from "react";
import { Button } from "react-bootstrap";
import Tabela from "../Tabela/tabela";

export default function Listagem({ colunas, linhas, handleDelete, caminhoEditar, caminhoCriar }) {
    return (
        <>
            <h4 className="d-flex justify-content-center">Usuários</h4>
            <Button variant="primary" as="a" href={caminhoCriar} style={{
                marginBottom: ".4rem"
            }}>
                Criar
            </Button>
            <Tabela
                colunas={colunas}
                linhas={linhas}
                handleDelete={handleDelete}
                caminhoEditar={caminhoEditar}
            />
        </>
    );
}