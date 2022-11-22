const viewModel = require("../models/viewModel");

module.exports = {
  buscarTodos: async (req, res) => {
    try {
      const resultado = await viewModel.buscarTodos();
      if (!resultado) {
        return res
          .status(404)
          .json({ status: false, mensagem: "Erro ao encontrar as comandas!" });
      }

      return res
        .status(200)
        .json({
          status: true,
          mensagem: "Comanda encontrada com sucesso!",
          objeto: resultado,
        });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ status: false, mensagem: "Erro" });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const id = req.params.id;
      const comanda = await viewModel.buscarPorId(id);

      if (!comanda) {
        return res
          .status(404)
          .json({ status: false, mensagem: "Erro ao buscar pelo ID" });
      }

      return res
        .status(200)
        .json({
          status: true,
          mensagem: "Comanda buscada com êxito!",
          objeto: comanda,
        });
    } catch (err) {
      console.log(err);

      return res.status(500).json({ status: false, mensagem: "Erro" });
    }
  },
};
