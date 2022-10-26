const movimentoController = require("../models/movimentoModel");


module.exports = {

    buscarTodos: async (req, res) => {
        try {
            const movimento = await movimentoController.buscarTodos();

            if (!movimento) {
                return res.status(404).json({ sucesso: false, mensagem: "Erro ao buscar os movimentos!" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Movimentos buscados com sucesso", objeto: movimento });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const movimento = await movimentoController.buscarPorId(id);

            if (!movimento) {
                return res.status(404).json({ sucesso: false, mensagem: "Erro ao buscar pelo ID" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Movimento encontrado com sucesso", objeto: movimento });

        } catch (err) {
            console.log(err);
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    inserirMovimento: async (req, res) => {
        try {

            const movimento = req.body;
            const resultado = await movimentoController.inserirMovimento(movimento);

            if (!resultado) {
                return res.status(404).json({ sucesso: false, mensagem: "Erro ao inserir o Movimento" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Movimento inserido com sucesso", objeto: movimento });
        } catch (err) {
            console.log(err);

            return res.status(500).json({ sucesso: false, menagem: "Erro" });
        }
    },

    editarMovimento: async (req, res) => {
        try {
            const id = req.params.id;
            const movimento = req.body;
            const resultado = await movimentoController.editarMovimento(id, movimento);

            if (!resultado) {
                return res.status(404).json({ sucesso: false, mensagem: "Erro ao editar o Movimento!" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Movimento editado com sucesso!" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = req.params.id;
            const resultado = await movimentoController.deletar(id);

            if (!resultado) {
                return res.status(404).json({ sucesso: false, mensagem: "Erro ao deletar o movimento" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Movimento excluido com sucesso!" });
        } catch (err) {
            console.log(err);

            return res.status(500).json({ sucesso: false, mensagem: "Erro" });
        }


    }

};