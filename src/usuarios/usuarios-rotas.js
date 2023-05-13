const usuariosControlador = require('./usuarios-controlador');
const middlesAutenticacao = require('./middlewares-autenticacao');

module.exports = app => {
  app
    .route('/usuario/login')
    .post(
      middlesAutenticacao.local, 
      usuariosControlador.login
    )

  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id')
      .delete(
        middlesAutenticacao.bearer, 
        usuariosControlador.deleta);
};
