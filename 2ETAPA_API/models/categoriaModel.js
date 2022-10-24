const db = require("../config/database");

module.exports = {

    buscarTodos: async () => {
        try {
            const categoria = await db.select().table("TB_Categoria");
            if (!categoria) {
                return null;
            }
            return categoria;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const categoria = await db.select().table("TB_Categoria").where("TB_Categoria.IDCategoria", id);

            if (!categoria) {
                return null;
            }

            return categoria;

        } catch (err) {
            console.log(err);
            return null;
        }


    },

    criarCategoria: async (categoria)=>{
        try{
            const resultado = await db.insert(categoria).into("TB_Categoria");
            return resultado;
        }
        catch(err){
            console.log(err);
            return null;
        }
    },

    editarCategoria: async (id, categoria) =>{
        try{
            const resultado = await db.update(categoria).table("TB_Categoria").where("TB_Categoria.IDCategoria",id);
            return resultado;
        }
        catch(err){
            console.log(err);
            return null;
        }
    },
    
    deletar: async (id) =>{
        try{
            const resultado = await db.select().table("TB_Categoria").where("TB_Categoria.IDCategoria", id).del();
            return resultado;
        }
        catch(err){
            console.log(err)
            return null;
                
        }
    }

};

