const usuariosControlador = require('./usuarios-controlador');
const middlesAutenticacao = require('./middlewares-autenticacao');
const passport = require('passport');


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

  app.route('/usuario/:id').delete(passport.authenticate('bearer', { session: false }), 
                                    usuariosControlador.deleta);
};
