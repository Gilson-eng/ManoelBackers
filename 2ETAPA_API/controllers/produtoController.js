const produtoModel = require("../models/produtoModel");

module.exports = {
  buscarTodos: async (req, res) => {
    try {
      const produto = await produtoModel.buscarTodos();

      if (!produto) {
        return res.status(404).json({
          sucesso: false,
          mensagem: "Produto não existentes!",
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: "Produtos buscados com êxito",
        objeto: produto,
      });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const id = req.params.id;
      const produto = await produtoModel.buscarPorId(id);

      if (!produto) {
        return res.status(404).json({
          sucesso: false,
          mensagem: "Produto não encontrado!",
        });
      }

      return res.status(200).json({
        sucesso: true,
        mensagem: "Produto buscado com êxito",
        objeto: produto,
      });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },

  inserirProduto: async (req, res) => {
    try {
      const produto = req.body;
      const resultado = await produtoModel.criarProduto(produto);

      if (!resultado) {
        return res
          .status(400)
          .json({ sucesso: false, mensagem: "Erro ao inserir o produto" });
      }

      return res
        .status(201)
        .json({ sucesso: true, mensagem: "Produto criado com sucesso!" });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },

  editarProduto: async (req, res) => {
    try {
      const id = req.params.id;
      const produto = req.body;
      const resultado = await produtoModel.editarProduto(id, produto);

      if (!resultado) {
        return res
          .status(400)
          .json({ sucesso: false, mensagem: "Erro ao editar o produto" });
      }

      return res
        .status(200)
        .json({ sucesso: true, mensagem: "Produto editado com sucesso!" });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },

  deletar: async (req, res) => {
    try {
      const id = req.params.id;
      const resultado = await produtoModel.deletar(id);

      if (!resultado) {
        return res
          .status(400)
          .json({ sucesso: false, mensagem: "Produto não pode ser excluido!" });
      }

      return res
        .status(200)
        .json({ sucesso: true, mensagem: "Produto excluido com sucesso!" });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ sucesso: false, mensagem: "Erro" });
    }
  },
};
