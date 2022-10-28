const unidadeMedidaModel = require("../models/unidadeMedidaModel");

module.exports = {

    buscarTodos: async (req, res) => {
        try {
            const resultado = await unidadeMedidaModel.buscarTodos();
            if (!resultado) {
                res.status(404).json
                    ({
                        sucesso: false,
                        mensagem: "Erro ao buscar as unidades de medidas!"
                    });
            }

            return res.status(200)
                .json({
                    sucesso: true,
                    mensagem: "Unidades de medidas buscadas com sucesso",
                    objeto: resultado
                });

        } catch (err) {
            console.log(err);
            return res.status(500)
                .json({
                    sucesso: false,
                    mensagem: "Erro"
                });
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const resultado = await unidadeMedidaModel.buscarPorId(id);

            if (!resultado) {
                return res.status(404)
                    .json({
                        sucesso: false,
                        mensagem: "Erro ao buscar pelo ID!"
                    });
            }

            return res.status(200)
                .json({
                    sucesso: true,
                    mensagem: "Unidades buscadas pelo ID com sucesso!",
                    objeto: resultado
                });
        } catch (err) {
            console.log(err);

            return res.status(500)
                .json({
                    sucesso: false,
                    mensagem: "Erro"
                });
        }
    },

    criarUnidadeMedida: async (req, res) => {
        try {
            const unidadeMedida = req.body;
            const resultado = await unidadeMedidaModel.criarUnidadeMedida(unidadeMedida);

            if (!resultado) {
                return res.status(400)
                    .json({
                        sucesso: false,
                        mensagem: "Erro ao criar a unidade de medida"
                    });
            }
            return res.status(200)
                .json({
                    sucesso: true,
                    mensagem: "Unidade de Medida criada com sucesso",
                    objeto: resultado
                });
        } catch (err) {
            console.log(err);
            return res.status(500)
                .json({
                    sucesso: false,
                    mensagem: "Erro"
                });
        }
    },

    editarUnidadeMedida: async (req, res) => {
        try {
            const id = req.params.id;
            const unidadeMedida = req.body;
            const resultado = await unidadeMedidaModel.editarUnidadeMedida(id, unidadeMedida);
            if (!unidadeMedida) {
                return res.status(404)
                    .json({
                        sucesso: false,
                        mensagem: "Erro ao editar a unidade de medida!"
                    });
            }
            return res.status(200)
                .json({
                    sucesso: true,
                    mensagem: "Sucesso ao editar o perfil",
                    objeto: unidadeMedida
                });
        } catch (err) {
            console.log(err);

            return res.status(500)
                .json({
                    sucesso: false,
                    mensagem: "Erro"
                });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = req.params.id;
            const resultado = await unidadeMedidaModel.deletar(id);

            if (!resultado) {
                return res.status(404)
                    .json({
                        sucesso: false,
                        mensagem: "Erro ao deletar a unidade de medida"
                    });
            }

            return res.status(200)
                .json({ sucesso: true, mensagem: "Sucesso ao deletar a unidade de medida" });
        } catch (err) {
            console.log(err);

            return res.status(500)
                .json({
                    sucesso: false,
                    mensagem: "Erro"
                });
        }
    }
};