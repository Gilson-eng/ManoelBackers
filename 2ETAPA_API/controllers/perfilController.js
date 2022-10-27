const perfilModel = require("../models/perfilModel");


module.exports = {
    buscarTodos: async (req, res) => {
        try {

            const perfis = await perfilModel.buscarTodos();

            if (!perfis) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Perfis não existentes!"
                });
            }

            return res
                .status(200)
                .json({
                    sucesso: true,
                    mensagem: "Perfis buscados com êxito",
                    objeto: perfis,
                });
        } catch (err) {
            console.log(err);

            return res
                .status(500)
                .json({ sucesso: false, mensagem: "Erro" });
        }
    },

    buscarPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const perfis = await perfilModel.buscarPorId(id);

            if (!perfis) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Perfil não encontrado!"
                });
            }

            return res
                .status(200)
                .json({
                    sucesso: true,
                    mensagem: "Perfis buscados com êxito",
                    objeto: perfis,
                });
        } catch (err) {
            console.log(err);

            return res
                .status(500)
                .json({ sucesso: false, mensagem: "Erro" });
        }

    },

    inserirPerfil: async (req, res) => {
        try {
            const perfil = req.body;
            const resultado = await perfilModel.criarPerfil(perfil);

            if (!resultado) {
                return res.status(400).json({ sucesso: false, mensagem: "Erro ao inserir o perfil" });
            }

            return res.status(201).json({ sucesso: true, mensagem: "Perfil criado com sucesso!" });

        } catch (err) {
            console.log(err);

            return res
                .status(500)
                .json({ sucesso: false, mensagem: "Erro" });
        }

    },

    editarPerfil: async (req, res) => {
        try {
            const id = req.params.id;
            const perfil = req.body;
            const resultado = await perfilModel.editarPerfil(id, perfil);

            if (!resultado) {
                return res.status(400).json({ sucesso: false, mensagem: "Erro ao editar o perfil" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Perfil editado com sucesso!" });

        } catch (err) {
            console.log(err);

            return res
                .status(500)
                .json({ sucesso: false, mensagem: "Erro" });
        }


    },

    deletar: async (req, res) => {
        try {
            const id = req.params.id;
            const resultado = await perfilModel.deletar(id);

            if (!resultado) {
                return res.status(400).json({ sucesso: false, mensagem: "Perfil não pode ser excluido!" });
            }

            return res.status(200).json({ sucesso: true, mensagem: "Perfil excluido com sucesso!" });

        } catch (err) {
            console.log(err);

            return res
                .status(500)
                .json({ sucesso: false, mensagem: "Erro" });
        }


    }
};
