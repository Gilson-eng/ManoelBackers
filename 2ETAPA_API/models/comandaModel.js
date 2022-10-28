const db = require("../config/database");

module.exports = {
buscarTodos: async () =>{
    try{
        const comanda = await db.select().table("TB_Comanda");

        if(!comanda){
            return null;
        }
        return comanda;
    }catch(err){
        console.log(err);
        return err;    
    }
},

buscarPorId: async (id) =>{
    try{
        const comanda = await db.select().table("TB_Comanda").where("TB_Comanda.IDComanda",id);

        if(!comanda){
            return null;
        }
        return comanda;
    } catch(err){
        console.log(err);
        return comanda;
    }
},

criarComanda: async (comanda)=>{
    try{
        const resultado = await db.insert(comanda).into("TB_Comanda");
        if(!resultado){
            return null;
        }

        return resultado;

    } catch(err){
        console.log(err);
    }
},

editarComanda: async (id, comanda) =>{
    try{
        const resultado = await db.update(comanda).table("TB_Comanda").where("TB_Comanda.IDComanda", id);

        
        return resultado;
    } catch(err){
        return null;
    }
},

deletar: async (id) =>{
    try{
        const resultado = await db.select().table("TB_Comanda").where("TB_Comanda.IDComanda",id).del();

        return resultado;
        
    } catch(err){
        console.log(err);
        return null;
    }
}

};