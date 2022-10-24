const categoriaModel = require("../models/categoriaModel");

module.exports = {
    buscarTodos: async (req, res) => {
        try {
            const categoria = await categoriaModel.buscarTodos();
            if (!categoria) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Categoria vazia"
                })
            }

            return res.status(200).json({ sucesso: true, mensagem: "Categorias buscadas com êxito", objeto: categoria });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const categoria = await categoriaModel.buscarPorId(id);

            if (!categoria) {
                return res.status(404).json({ sucesso: false, mensagem: "Erro ao encontrar a categoria" });

            }

            return res.status(200).json({ sucesso: true, mensagem: "Categoria encontrada com sucesso", objeto: categoria });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    inserirCategoria: async (req, res) => {
        try {

            const categoria = req.body;
            const resultado = await categoriaModel.criarCategoria(categoria);

            if(!categoria){
                return res.status(400).json({sucesso: false, mensagem:"Erro ao inserir a categoria"});
            }

            return res.status(201).json({sucesso: true, mensagem: "Categoria inserida com sucesso"});


        }
        catch (err) {
            console.log(err);

            return res.status(500).json({sucesso: false, mensagem: "Erro"});

        }
    },

    editarCategoria: async (req, res) => {
        try{
            const id = req.params.id;
            const categoria = req.body;
            const resultado = await categoriaModel.editarCategoria(id, categoria);

            if(!resultado){
                return res.status(400).json({sucesso: false, mensagem: "Erro ao editar a Categoria"});
            }
            return res.status(200).json({sucesso: true, mensagem: "Categoria editada com sucesso"});
        }catch(err){
            console.log(err);
            return res.status(500).json({sucesso: false, mesagem:"Erro"});
        }
    },

    deletar: async(req, res)=>{
        try{
            const id = req.params.id;
            const resultado = await categoriaModel.deletar(id);

            if(!resultado){
                return res.status(400).json({sucesso: false, mensagem:"Categoria não pode ser excluida"});
            }

            return res.status(200).json({sucesso: true, mensagem: "Categoria excluida com êxito"});
        } catch(err){
            console.log(err);
            return res.status(500).json({sucesso: false, mensagem:"Erro"});
        }

    }
};