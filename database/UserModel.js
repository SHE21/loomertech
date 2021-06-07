/*	
	Arquivo model da tabela 'users'
	Este arquivo define a estrtura da tabela 'users' no banco de dados.
	Created by Santiago, L.C
*/

//importa aquivo de conexão com banco de dados
const connection = require('./Connection')

//importa modulo Sequelize
const Sequelize = require('sequelize')

//Define o modelo da tabela 'users'
const User = connection.define('users', {

	//Estrutura da tabela 'users'
	idMask: { type: Sequelize.STRING, allowNull: false},
	fullName: { type: Sequelize.STRING, allowNull: false },
	cpf: { type: Sequelize.STRING, allowNull: false },
	email: { type: Sequelize.STRING, allowNull: false },
	password: { type: Sequelize.STRING, allowNull: false }

})

//Se não exitir nenhuma tebela 'users' será criado uma.
//Config: {force: true} para desligar as tentativas de criar a tabela sempre que este model for chamado
User.sync({force: false}).then(() => {
	console.log({msn: "Tabela 'users' foi criada"})
})

module.exports = User