const db = require("../config/database");

module.exports = {
    buscarTodos: async () => {
        try {
            const resultado = await db.select()
                .table("TB_Produtos");
            if (!resultado) {
                return null
            }

            return resultado;
        }
        catch (err) {
            console.log(err);
            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const produtos = await db.select()
                .table("TB_Produtos")
                .where("TB_Produtos.IDProduto", id);

            if (!produtos) {
                return null;
            }

            return produtos;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    inserirProduto: async (produto) => {
        try {
            const resultado = await db.insert(produto)
                .table("TB_Produtos");

            if (!resultado) {
                return null;
            }
            return resultado;
        } catch (err) {
            console.log(err);

            return null;
        }
    },

    editarProduto: async (id, produto) => {
        try {
            const resultado = await db.update(produto)
                .table("TB_Produtos")
                .where("TB_Produtos.IDProduto", id);

            return resultado;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    deletar: async (id) => {
        try {
            const resultado = await db.select()
                .table("TB_Produtos")
                .where("TB_Produtos.IDProduto", id).del();

        } catch (err) {
            console.log(err);

            return null;
        }
    }
};