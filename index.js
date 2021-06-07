/*	
	Arquivo entry point da API.
	Configuração de Middleware, Sessions, Rotas e Servidor
	Created by Santiago, L.C
*/

//Carregamento de Modulos
const msn = require('./util/Message')
const express = require('express')
const session = require('express-session')
const bodyparser = require('body-parser')
const app = express()

//Returns middleware that only parses json and only
//looks at requests where the Content-Type header matches the type option.
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//Configurando sessions
app.use(session({
	secret: "Armagedom2321@",
	cookie: {maxAge:60000000000},
	resave: true,
	saveUninitialized: true
}))

app.use((req, res, next) => {
	console.log('MIDDLEWARE')
	next()
})

/*
	Configurações de Rotas
*/
const user = require('./routs/UserRout')
const imovel = require('./routs/ImovelRout')

/*
	Definição de Rotas
*/
app.use('/user', user)
app.use('/imovel', imovel)

/*
	Configurações e conexão do servidor NodeJs
	http://localhost:3000
*/
const PORT = 3000
app.listen( PORT, ( error ) => {

	if ( !error ) {
		//Conectado ao Servidor
		console.log( {msn: msn.ok_server()} )

	} else {
		//Erro ao conectar ao Servidor
		console.log( {msn: msn.error_server()} )

	}
})