const itemComandaModel = require("../models/itemComandaModel");

module.exports = {

    buscarTodos: async (req, res) => {
        try {

            const resultado = await itemComandaModel.buscarTodos();

            if (!resultado) {
                return res.status(404)
                    .json({
                        sucesso: false,
                        mensagem: "Erro ao encontrar item comanda"
                    });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Itens comanda encontrados com sucesso",
                objeto: resultado
            });
        } catch (err) {
            console.log(err);

            return res.status(500)
                .json({ sucesso: false, mensagem: "Erro" });
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const itemComanda = await itemComandaModel.buscarPorId(id);

            if (!itemComanda) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar pelo ID!"
                });
            }
            return res.status(200).json({
                sucesso: true,
                mensagem: "Sucesso ao buscar pelo ID!",
                objeto: itemComanda
            })
        } catch (err) {
            console.log(err);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro"
            });
        }
    },

    criarItemComanda: async (req, res) => {
        try {
            const itemComanda = req.body;
            const resultado = await itemComandaModel.criarItemComanda(itemComanda);

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao criar o item da comanda!"
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Item comanda criado com sucesso!",
            });

        } catch (err) {
            console.log(err);

            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    editarItemComanda: async (req, res) => {
        try {
            const id = req.params.id;
            const itemComanda = req.body;
            const resultado = await itemComandaModel.editarItemComanda(id, itemComanda);

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao editar o item da comanda!"
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Item de comanda alterado com sucesso!"
            });

        } catch (err) {
            console.log(err);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro"
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = req.params.id;
            const resultado = await itemComandaModel.deletar(id);

            if (!resultado) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir o item!"
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Item excluído com sucesso!"
            });

        } catch (err) {
            console.log(err);

            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    }
};