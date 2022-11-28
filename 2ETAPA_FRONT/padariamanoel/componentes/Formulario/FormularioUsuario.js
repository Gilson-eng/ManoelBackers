import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../services/api";

export default function UserForm({ id = -1, handleSubmit }) {
    const [perfis, setPerfis] = useState([]);
    const [values, setValues] = useState({
        IDUsuario: 0,
        Nome: "",
        Login: "",
        Senha: "",
        IDPerfil: 0,
    });

    async function preparaDados() {
        try {
            const perfisData = await api.get("/perfil");
            setPerfis(perfisData.data.objeto);

            if (id > 0) {
                const userData = await api.get("/usuario/" + id);
                setValues({
                    IDUsuario: userData.data.objeto.IDUsuario,
                    Nome: userData.data.objeto.Nome,
                    Login: userData.data.objeto.Login,
                    Senha: userData.data.objeto.Senha,
                    IDPerfil: userData.data.objeto.IDPerfil,
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