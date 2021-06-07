/*	
	Arquivo de criação e configuração de acesso à rotas do dominio Usuário
	Created by Santiago, L.C
*/

//Carregamento de Modulos
const userModel = require('../database/DaoUser')
const idRand = require('../util/IdRandom')
const KEY = require('../middleware/Token')
const msn = require('../util/Message')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

/*
	Cadastra um usuário no tabela 'users'
	Rota: root/user/add/ Method: POST Access: PUBLIC
*/
router.post('/add', (req, res) => {

	//Obtem dados da requisição
	let fullname = req.body.fullname
	let cpf = req.body.cpf
	let email = req.body.email
	let password = req.body.password

	//Criptografa a senha passada pelo usuário
	let salt = bcrypt.genSaltSync(10)
	let passHash = bcrypt.hashSync(password, salt)

	//Cria um objeto com dados da requisição e com a senha já criptografada
	const newUser = {
		idMask: idRand.get(),
		fullName: fullname,
		cpf: cpf,
		email: email,
		password: passHash

	}

	//Cadastra um usuário na table 'users'
	userModel.addUser(newUser).then( user => {

		if (user !=null) {
			//msn: Usuário cadastrado com sucesso.
			res.send({ message: msn.ok_user_register(), user: user})

		}else{
			//msn: Ocorreu um erro. Tenta mais tarde.'
			res.send({ message: msn.error_try_later() })
		}

	})
})

/*
	Cadastra um usuário no tabela 'users'
	Rota: root/user/login/ Method: POST Access: PUBLIC
*/
router.post('/login', (req, res) => {

	//obtem os dados passados pelo usuário atravez de requisições. Campos: email e password
	let email = req.body.email
	let password = req.body.password

	//Cria um objeto e popula com os dados das requisições
	const userLog = {
		email: req.body.email
	}

	//Faz a consulta na tabela 'user' usando as credenciais de acesso: email e password
	userModel.getOneUser( userLog ).then( user => {

		if (user != null) {

			//Compara as senhas criptografadas
			let cryptPass = bcrypt.compareSync( password, user.password )

			//Se as senhas forem iguais retorna TRUE
			if ( cryptPass ) {

				//Gera o token com assinatura do IdMask do usuário
				const token = jwt.sign({idUser: user.idMask}, KEY.key(), {expiresIn: 300000})

				//Criar uma sessão com o token
				req.session.user = {
					id: token
				}

				//Usuário logado!
				res.json({ message: msn.ok_user_login(), session: req.session.user})

			}else{
				//Senha ou email incorretos! (Email correto, mas senha incorreta)
				res.json({ message: msn.error_user_login() })

			}

		}else{
			//Senha ou email incorretos! (Não encontrou nenhum usuário)
			res.json({ message: msn.error_user_login() })

		}
	})
})

module.exports = router