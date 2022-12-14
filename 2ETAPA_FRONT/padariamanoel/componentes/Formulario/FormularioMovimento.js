import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../services/api";

export default function UserForm({ id = -1, handleSubmit }) {
    const [movimento, setMovimento] = useState([]);
    const [values, setValues] = useState({
        IDMovimento: 0,
        Descricao: "",
        Tipo: "",
        DataMovimento:"",
        Valor: 0,
        IDUsuario: 0,
       
    });

    async function preparaDados() {
        try {
            const movimentoData = await api.get("/movimento");
            setMovimento(movimentoData.data.objeto);

            if (id > 0) {
                const userData = await api.get("/movimento/" + id);
                setValues({
                  IDMovimento: userData.data.IDMovimento,
                  Descricao: userData.data.Descricao,
                  Tipo: userData.data.Tipo,
                  DataMovimento: userData.dara.DataMovimento,                
                  Valor: userData.data.Valor,
                  IDUsuario: userData.data.IDUsuario,
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
        <Form.Group className="mb-3" control1="Descrição">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            value={values.Descricao}
            onChange={(e) =>
              setValues({
                ...values,
                Descricao: e.target.value,
              })
            }
            placeholder="Digite a descrição do movimento"
          />
        </Form.Group>
        <Form.Group className="mb-3" control2="Tipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            value={values.Tipo}
            onChange={(e) =>
              setValues({
                ...values,
                Tipo: e.target.value,
              })
            }
            placeholder="Digite o tipo do movimento"
          />
        </Form.Group>
        <Form.Group className="mb-3" control3="Data do movimento">
          <Form.Label>Data do movimento</Form.Label>
          <Form.Control
            type="date"
            value={values.DataMovimento}
            onChange={(e) =>
              setValues({
                ...values,
                DataMovimento: e.target.value,
              })
            }
            placeholder="Digite a data do movimento"
          />
        </Form.Group>
        <Form.Group className="mb-3" control4="Valor">
          <Form.Label>Valor</Form.Label>
          <Form.Control
            type="number"
            value={values.Valor}
            onChange={(e) =>
              setValues({
                ...values,
                Valor: e.target.value,
              })
            }
            placeholder="Digite o valor do movimento"
          />
        </Form.Group>
        <Form.Group className="mb-3" control5="ID Usuário">
          <Form.Label>ID Usuário</Form.Label>
          <Form.Control
            type="number"
            value={values.IDUsuario}
            onChange={(e) =>
              setValues({
                ...values,
                IDUsuario: e.target.value,
              })
            }
            placeholder="Digite o ID do Usuário"
          />
        </Form.Group>
        <Form.Group className="d-flex flex-column">
        <Button variant="primary" type="button" onClick={() => api.push("/movimento")}>
                    Enviar
                </Button>
          <Button
            className="mt-1"
            variant="secondary"
            type="button"
            onClick={() => navigate.push("/movimentos")}
          >
            Voltar
          </Button>
        </Form.Group>
      </>
    );
  }