const testeModel = require("../models/testeModel");

module.exports = {

    buscarTodos: async (req, res) => {
        try {
            const resultado = await testeModel.buscarTodos();

            if (!resultado) {
                return res.status(404).json({ sucesso: false, 
                    mensagem: "Erro ao buscar todos!" });
            }

            return res.status(200).json({ sucesso: true, 
                mensagem: "Sucesso ao buscar", objeto: resultado });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = await testeModel.buscarPorId(id);

            if (!produto) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar pelo ID"
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Sucesso ao buscar pelo ID",
                objeto: produto
            });
        } catch (err) {
            console.log(err);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro"
            });
        }
    },

    inserirProduto: async (req, res) => {
        try {
            const produto = req.body;
            const resultado = await testeModel.inserirProduto(produto);

            if (!resultado) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao inserir o produto!"
                });

            }
            return res.status(200).json({
                sucesso: true,
                mensagem: "Produto inserido com sucesso!",
                objeto: resultado
            });
        } catch (err) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    editarProduto: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = req.body;
            const resultado = await testeModel.editarProduto(id, produto);

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao editar!"
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Sucesso ao editar!",
                objeto: resultado
            });

        } catch (err) {
            console.log(err);

            return res.status(500).json({ sucesso: false, mensagem: "Erro" })
        }
    },

    deletar: async (req, res) => {
        try {
            const id = req.params.id;
            const produto = await testeModel.deletar(id);

            if (!produto) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir!"
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Sucesso ao excluir!"
            });
        } catch (err) {

            console.log(err);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro"
            });
        }
    }
};