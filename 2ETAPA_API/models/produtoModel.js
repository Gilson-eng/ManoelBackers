const db = require("../config/database");

module.exports = {

    buscarTodos: async () => {
        try {

            const produto = await db
                .select()

                .table("TB_Produtos");

            if (!produto) {
                return null;
            }

            return produto;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const produto = await db
                .select()

                .table("TB_Produtos").where("TB_Produtos.IDProduto", id);

            if (!produto) {
                return null;
            }

            return produto; 
            

        } catch (err) {
            console.log(err);
            return null;
        }

    },

    criarProduto: async (produto) => {
        try {
            const resultado = await db.insert(produto).into("TB_Produtos");
            return resultado;

        } catch (err) {
            console.log(err);
            return null;
        }


    },

    editarProduto: async (id, produto) => {
        try {
            const resultado = await db.update(produto).table("TB_Produtos").where("TB_Produtos.IDProduto", id);

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

                .table("TB_Produtos").where("TB_Produtos.IDProduto", id).del();


            return resultado;

        } catch (err) {
            console.log(err);
            return null;
        }


    }
};
