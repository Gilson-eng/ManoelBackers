const db = require("../config/database");

module.exports = {

    buscarTodos: async () => {
        try {

            const perfis = await db
                .select()

                .table("TB_Perfil");

            if (!perfis) {
                return null;
            }

            return perfis;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const perfis = await db
                .select()

                .table("TB_Perfil").where("TB_Perfil.IDPerfil", id);

            if (!perfis) {
                return null;
            }

            return perfis;


        } catch (err) {
            console.log(err);
            return null;
        }

    },

    criarPerfil: async (perfil) => {
        try {
            const resultado = await db.insert(perfil).into("TB_Perfil");
            return resultado;

        } catch (err) {
            console.log(err);
            return null;
        }


    },

    editarPerfil: async (id, perfil) => {
        try {
            const resultado = await db.update(perfil).table("TB_Perfil").where("TB_Perfil.IDPerfil", id);

            return resultado;

        }
        catch (err) {
            console.log(err);
            return null;
        }


    },

    deletar: async (id) => {
        try {
            const resultado = await db
                .select()

                .table("TB_Perfil").where("TB_Perfil.IDPerfil", id).del();


            return resultado;

        } catch (err) {
            console.log(err);
            return null;
        }


    }
};
