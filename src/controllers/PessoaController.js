const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatricula = await pessoaServices.pegaMatriculasPorEstudante(
        Number(estudanteId)
      );
      return res.status(200).json(listaMatricula);
    } catch (erro) {
      // erro
    }
  }
}

module.exports = PessoaController;
