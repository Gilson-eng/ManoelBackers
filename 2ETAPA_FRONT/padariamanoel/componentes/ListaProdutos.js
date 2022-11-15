import {useState, useEffect} from 'react';
import api from '../services/api';

const ListaProdutos = ()=>{

    const [produtos, setProdutos] = useState([]);
    async function buscaProdutos ()
    {
        let resposta = await api.get('/produtos');

        console.log("produtos = ", resposta.data.objeto);

        setProdutos(resposta.data.objeto);
    }

    async function adicionaProduto  () {
        console.log("inserindo");
       let produto = 
                {
                    IDProduto: 85,
                    Descricao:"Cana Brava",
                    IDUnidadeMedida:"28",
                    IDCategoria: "2",
                    CodigoDeBarras: "126726745",
                    Quantidade: "3",
                    QuantidadeMinima:"1"
                };
            
        let resposta = await api.post('/produto', produto);
        console.log('resposta',JSON.stringify(resposta));
        buscaProdutos();
    };

    useEffect(() => {
        buscaProdutos();
    }, []);


    return ( 
        <> 
           <div className="row mb-2">
               <h5 className="themeFontColor text-center">
                  Produtos
               </h5>
           </div>
           <table className="table table-hover">
               <thead>
                   <tr>
                       <th>Descrição</th>
                       <th>Código de Barras</th>
                       <th>Quantidade</th>
                       <th>Valor Unitário</th>
                   </tr>
               </thead>
               <tbody>
                 {produtos.map ((u) => (
                   <tr key={u.IDProduto}>
                       <td>{u.Descricao}</td>
                       <td>{u.CodigoDeBarras}</td>
                       <td>{u.Quantidade}</td>
                       <td>{u.ValorUnitario}</td>
                   </tr>
                 )

                 )}
               </tbody>
           </table>
           <button className="btn btn-primary" onClick={adicionaProduto}>
               Adicionar Produtos
           </button>
       </>
   ); 
};

export default ListaProdutos;


