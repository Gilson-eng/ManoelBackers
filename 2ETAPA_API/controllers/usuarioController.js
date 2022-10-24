const usuarioModel = require("../models/usuarioModel");

module.exports = {

    buscarTodos: async (req, res) =>{
        try{
            const usuario = await usuarioModel.buscarTodos();

            if(!usuario){
                return res.status(404).json({sucesso: false, mensagem: "Erro ao buscar Usuários!"});
            }
            return res.status(200).json({sucesso: true, mensagem: "Usuarios carregados com êxito!", objeto: usuario});
        }catch(err){
            console.log(err);
            return res.status(500).json({sucesso: false, mensagem: "Erro"});
        }
    },

    buscarPorId: async(req, res) =>{
        try{
            const id = req.params.id;
            const usuario = await usuarioModel.buscarPorId(id);

            if(!usuario){
                return res.status(404).json({sucesso: false, mensagem: "Erro ao buscar por ID!"});
            }

            return res.status(200).json({sucesso: true, mensagem:"Usuario buscado com sucesso!", objeto: usuario});
        } catch(err){
            console.log(err);
            return res.status(500).json({sucesso: true, mensagem:"Erro"});
        }
    },

    inserirUsuario: async (req, res) =>{
        try{
            const usuario = req.body;
            const resultado = await usuarioModel.criarUsuario(usuario);
            if(!resultado){
                return res.status(400).json({sucesso: false, mensagem: "Erro ao criar usuário!"});
            }
            return res.status(201).json({sucesso: true, mensagem:"Usuário criado com sucesso!"});
        }catch(err){
            console.log(err);
            return res.status(500).json({sucesso: false, mensagem:"Erro"});
        }
    },

    editarUsuario: async(req, res) =>{
        try{
            const id = req.params.id;
            const usuario = req.body;
            const resultado = await usuarioModel.editarUsuario(id, usuario);

            if(!resultado){
                return res.status(400).json({sucesso: false, mensagem:"Erro ao editar o usuário"});
            }  
            return res.status(201).json({sucesso: true, mensagem:"Usuário editado com sucesso!"});          
        } catch(err){
            console.log(err);
            return res.status(500).json({sucesso: false, mensagem: "Erro"});
        }         
    },

    deletar: async(req, res)=>{
        try{
            const id = res.params.id;
            const resultado = await usuarioModel.deletar(id);

            if(!resultado){
                return res.status(400).json({sucesso: false, mensagem:"Erro ao deletar o usuario!"});
            }
            return res.status(201).json({sucesso: true, mensagem:"Usuario excluido com sucesso!"});
        }catch(err){
            console.log(err);
            return res.status(500).json({sucesso: false, mensagem:"Erro"});
        }
    }
};