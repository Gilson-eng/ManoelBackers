import { useState, useEffect } from "react";
import api from "../services/api";


const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);    
    async function  buscaUsuarios  () 
    {
        let resposta = await api.get('/usuario');

        console.log("usuarios = ", resposta.data.objeto);

        setUsuarios(resposta.data.objeto);
    }

    async function adicionaUsuario  () {
        console.log("inserindo");
       let usuario = 
                {
                    Login: "teste@teste.com",
                    Nome: "Usuario de teste",
                    Senha: "123",
                    Status: "Criado",
                    IDPerfil: 6
                };
            
        let resposta = await api.post('/usuario', usuario);
        console.log('resposta',JSON.stringify(resposta));
        buscaUsuarios();
    };

    useEffect(() => {
        buscaUsuarios();
    }, []);

    

return ( 
         <> 
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                   Usuários
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Login</th>
                        <th>Nome</th>
                        <th>Senha</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  {usuarios.map ((u) => (
                    <tr key={u.IDUsuario}>
                        <td>{u.Login}</td>
                        <td>{u.Nome}</td>
                        <td>{u.Senha}</td>
                        <td>{u.Status}</td>
                    </tr>
                  )

                  )}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={adicionaUsuario}>
                Adicionar Usuário
            </button>
        </>
    ); 
};

export default ListaUsuarios;