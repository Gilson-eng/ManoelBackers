const db = require("../config/database");
const movimentoController = require("../controllers/movimentoController");

module.exports = {
    buscarTodos: async () => {
        try {
            const movimento = await db.select().table("TB_Movimento");

            if (!movimento) {
                return null;
            }

            return movimento;
        } catch (err) {
            console.log(err);

            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const movimento = await db.select().table("TB_Movimento").where("TB_Movimento.IDMovimento", id);

            if (!movimento) {
                return null;
            }

            return movimento;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    inserirMovimento: async (movimento) => {
        try {
            const resultado = await db.insert(movimento).into("TB_Movimento");
            return resultado;
        } catch (err) {
            console.log(err)
            return null;
        }

    },

    editarMovimento: async (id, movimento) => {
        try {
            const resultado = await db.update(movimento).table("TB_Movimento").where("TB_Movimento.IDMovimento", id);
            return resultado;
        } catch (err) {
            console.log(err);
            return err;
        }
    },

    deletar: async (id) => {

        try {
            const resultado = await db.select().table("TB_Movimento").where("TB_Movimento.IDMovimento", id).del();
            return resultado;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};
