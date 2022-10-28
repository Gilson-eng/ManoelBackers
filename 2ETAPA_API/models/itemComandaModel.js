const db = require("../config/database");

module.exports = {

    buscarTodos: async () => {
        try {
            const itemComanda = await db.select().table("TB_Item_Comanda");

            if (!itemComanda) {
                return null;
            }

            return itemComanda;
        } catch (err) {
            console.log(err);

            return null;
        }
    },

    buscarPorId: async (id) =>{
        try{
            const itemComanda = await db.select()
            .table("TB_Item_Comanda")
            .where("TB_Item_Comanda.IDItemComanda",id);

            if(!itemComanda){
                return null;
            }
            
            return itemComanda;

        } catch(err){
            console.log(err);

            return null;
        }
    },

    criarItemComanda: async(itemComanda) =>{
        try{
            const resultado = await db.insert(itemComanda)
        .into("TB_Item_Comanda");
        
        if(!resultado){
            return null;
        }
        return resultado;

        }catch(err){
            console.log(err);

            return null;
        }     
        
    },

    editarItemComanda: async (id, itemComanda)=>{
        try{
            const resultado = await db.update(itemComanda)
            .table("TB_Item_Comanda")
            .where("TB_Item_Comanda.IDComanda", id);

            if(!resultado){
                return null;
            }

            return resultado;
        }catch(err){
            console.log(err);

            return null;
        }
    },

    deletar: async(id) =>{
        try{
            const resultado = await db.select()
            .table("TB_Item_Comanda")
            .where("TB_Item_Comanda.IDComanda", id).del();

            return resultado;
        }catch(err){
            console.log(err);

            return null;
        }
    }

};