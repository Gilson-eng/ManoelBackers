const db = require("../config/database");

module.exports = {

    buscarTodos: async () => {
        try {
            const usuario = await db.select().table("TB_Usuario");

            if (!usuario) {
                return null
            }
            return usuario;

        } catch (err) {
            console.log(err);
            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const usuario = await db.select().table("TB_Usuario").where("TB_Usuario.IDUsuario", id);
            if (!usuario) {
                return null;
            }
            return usuario;
        } catch (err) {
            console.log(err);
            return null;
        }

    },

    criarUsuario: async (usuario) => {

        try {
            const resultado = await db.insert(usuario).into("TB_Usuario");
            return resultado;

        } catch (err) {
            console.log(err);
            return null;
        }
    },

    editarUsuario: async (id, usuario) => {

        try {
            const resultado = await db.update(usuario).table("TB_Usuario").where("TB_Usuario.IDUsuario", id);
            return resultado;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    deletar: async (id) => {
        try {
            const resultado = await db.select().table("TB_Usuario.IDUsuario", id).del();
            return resultado;
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}