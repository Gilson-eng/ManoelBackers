import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../services/api";

export default function UserForm({ id = -1, handleSubmit }) {
    const [comandas, setComandas] = useState([]);
    const [values, setValues] = useState({
        IDComanda: 0,
        DataComanda: "",
        QuantidadeProduto: "",
        ValorUnitario: "",
        DescricaoProduto: 0,


    });

    async function preparaDados() {
        try {
            const comandasData = await api.get("/comanda");
            setComandas(comandasData.data.objeto);

            if (id > 0) {
                const userData = await api.get("/comanda/" + id);
                setValues({
                    IDComanda: userData.data.objeto.idComanda,
                    DataComanda: userData.data.objeto.dateComanda,
                    QuantidadeProduto: userData.data.objeto.quantidadeProduto,
                    ValorUnitario: userData.data.objeto.valorUnitarioProduto,
                    DescricaoProduto: userData.data.objeto.descricaoProduto,
                });
            }
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    useEffect(() => {
        preparaDados();
    }, []);

    return (
        <>
            <Form.Group className="mb-3" controlId="Nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    name="Nome"
                    value={values.Nome}
                    onChange={(e) =>
                        setValues({
                            ...values,
                            Nome: e.target.value,
                        })
                    }
                    placeholder="Digite seu nome"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Login">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    type="text"
                    name="Login"
                    value={values.Login}
                    onChange={(e) =>
                        setValues({
                            ...values,
                            Login: e.target.value,
                        })
                    }
                    placeholder="Digite seu login"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    name="Senha"
                    placeholder="Digite sua senha"
                    onChange={(e) =>
                        setValues({
                            ...values,
                            Senha: e.target.value,
                        })
                    }
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="IDPerfil">
                <Form.Label>Perfil</Form.Label>
                <Form.Select
                    name="IDPerfil"
                    placeholder="Selecione um perfil"
                    onChange={(e) =>
                        setValues({
                            ...values,
                            IDPerfil: e.target.value,
                        })
                    }
                    value = {values.IDPerfil}
                >
                    <option value = {-1}>Selecione um Perfil</option>
                    {perfis.map((el) => {
                        return (
                            <option key={el.IDPerfil} value={el.IDPerfil}>{el.Descricao}</option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="d-flex flex-column">
                <Button variant="primary" type="button" onClick={() => handleSubmit(values)}>
                    Enviar
                </Button>
                <Button
                    className="mt-1"
                    variant="secondary"
                    type="button"
                    onClick={() => console.log("")}
                >
                    Voltar
                </Button>
            </Form.Group>
        </>
    );
}