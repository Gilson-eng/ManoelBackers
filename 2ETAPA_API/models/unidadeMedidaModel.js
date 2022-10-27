const db = require("../config/database");

module.exports = {

    buscarTodos: async () => {
        try {
            const resultado = await db.select().table("TB_UnidadeMedida");

            if (!resultado) {
                return null;
            }
            return resultado;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    buscarPorId: async (id) => {
        try {
            const unidadeMedida = await db.select().table("TB_UnidadeMedida").where("TB_UnidadeMedida.IDUnidadeMedida", id);
            if (!unidadeMedida) {
                return null;
            }
            return unidadeMedida;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    criarUnidadeMedida: async(unidadeMedida) =>{
        try{
            const resultado = await db.insert(unidadeMedida).into("TB_UnidadeMedida");
                
    }catch(err){
        console.log(err);
        return null;
    }
        
    },

    editarUnidadeMedida: async (id, unidadeMedida) =>{
        try{
            const resultado = db.update(unidadeMedida).table("TB_UnidadeMedida").where("TB_UnidadeMedida.IDUnidadeMedida",id);
           
            return resultado;
        }catch(err){
            console.log(err);
            return null;
        }
    },

    deletar: async(id) => {
        try{
            const resultado = await db.select().table("TB_UnidadeMedida").where("TB_UnidadeMedida.IDUnidadeMedida", id).del();

            return resultado;          

        }catch(err){
            console.log(err);
                return null;
            }
        }
    
};