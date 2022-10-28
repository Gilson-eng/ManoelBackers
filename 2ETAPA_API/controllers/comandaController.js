const comandaModel = require("../models/comandaModel");

module.exports = {

    buscarTodos: async (req,res) =>{
        try{
            const comanda = await comandaModel.buscarTodos();

            if(!comanda){
                res.status(404).json({sucesso: false, 
                    mensagem: "Erro ao buscar as comandas"});
            }

            return res.status(200).json({sucesso: true, 
                mensagem:"Comandas buscadas com sucesso", 
                objeto: comanda});
        } catch(err){
            console.log(err);

            return res.status(500).json({sucesso: false, mensagem:"Erro"});
        }
    },

    buscarPorId: async (req, res) =>{
        try{
            const id = req.params.id;
            const comanda = await comandaModel.buscarPorId(id);

            if(!comanda){
                return res.status(404).json({sucesso: false, 
                    mensagem:"Erro ao buscar pelo Id!"});
            }

            return res.status(200).json({sucesso: true, 
                mensagem: "Comandas buscada pelo Id com sucesso!", 
                objeto: comanda})
        }catch(err){
            console.log(err);

            return res.status(500).json({sucesso: false, mensagem:"Erro"});
        }
    },

    inserirComanda: async (req, res) =>{
        try{
            const comanda = req.body;
            const resultado = await comandaModel.criarComanda(comanda);

            if(!resultado){
                return res.status(404).json({sucesso: false, 
                mensagem:"Erro ao criar a comanda"});
            }

            return res.status(200).json({sucesso: true, 
                mensagem:"Coamdna criada com sucesso!", 
                objeto: comanda});
        }catch(err){
            console.log(err);

            return res.status(500).json({sucesso: false, 
                mensagem:"Erro"});
        }
    },

    editarComanda: async (req, res) =>{
        try{
            const id = req.params.id;
            const comanda = req.body;
            const resultado = await comandaModel.editarComanda(id, comanda);

            if(!resultado){
                return res.status(404).json({sucesso: false, 
                    mensagem: "Erro ao editar a comanda!"});
            }

            return res.status(200).json({sucesso: true, 
                mensagem: "Comanda editada com sucesso", 
                objeto: comanda});
                
        }catch(err){
            console.log(err);

            return res.status(500).json({sucesso: false, 
                mensagem:"Erro"});
        }
    },

    deletar: async (req, res) =>{
        try{
            const id = req.params.id;
            const resultado = await comandaModel.deletar(id);

            if(!resultado){
                return res.status(404).json({sucesso: false, 
                    mensagem:"Erro ao excluir a comanda!"});
            }

            return res.status(200).json({sucesso: true, 
                mensagem: "Comanda excluída com sucesso!"});
        }catch(err){
            console.log(err);

            return res.status(500).json({sucesso: false, 
                mensagem:"Erro"});
        
        }
    }

};