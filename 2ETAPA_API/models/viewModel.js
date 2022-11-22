const db = require('../config/database');

module.exports = {
    buscarTodos:async ()=>{
        try{
            const resultado = await db.select().table("orderPadFull");
            if(!resultado){
                return null;
            }
            return resultado;
        }catch(err){
            console.log(err);
            return null;
        }

    },

    buscarPorId: async (id)=>{
        try{
            const comanda = await db.select().table("orderPadFull").where("orderPadFull.idComanda", id);
            if(!comanda){
                return null;
            }
    
            return comanda;
        }catch(err){
            console.log(err);
            return null;
        }
        
       
    }
}