/*	
	Class usada para encapsular a gerar do Token
	Created by Santiago, L.C
*/

class Token{

	//Metodo estatico para gerar token
	static get(req, res, next) {

		const jwt = require('jsonwebtoken')
		//Token enviado via header para API
		const token = req.headers['x-access-token']

		jwt.verify( token, Token.key(), ( erro, decoded ) => {
			//Retorna se o usuário ainda não entrou com as credenciais de acesso, email e senha
			//Rota de login: root/user/login
			if (erro) return res.json({message: 'Ação não permitida. Usuário não logado.'}).end()
			next()
		})
	}

	static key(){
		//Token key
		const KEY = 'Equus asinus'
		return KEY
	}
}

module.exports = Token