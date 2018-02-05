module.exports = (app) => {

	const action = app.src.actions.auth;

	app.post('/login', action.login);

  /**
   *
   * PT: rota para autenticar o usuário usando Json Web Token
   * EN: route to authenticate the user using Json Web Token
   *
   * app.use('/*', api.verifyToken);
   */

};
