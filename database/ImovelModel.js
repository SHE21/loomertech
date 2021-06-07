/*	
	Arquivo model da tabela 'imoveis'
	Este arquivo define a estrtura da tabela 'imoveis' no banco de dados.
	Created by Santiago, L.C
*/

//importa aquivo de conexão com banco de dados
const connection = require('./Connection')

//importa modulo Sequelize
const Sequelize = require('sequelize')

//Define o modelo da tabela 'imoveis'
const Imovel = connection.define('imoveis', {

	//Estrutura da tabela 'imoveis'
	idMask: { type: Sequelize.UUID, allowNull: false},
	cep: { type: Sequelize.INTEGER, allowNull: false },
	number: { type: Sequelize.INTEGER, allowNull: false },
	complement: { type: Sequelize.STRING, allowNull: false },
	rent_amount: { type: Sequelize.DECIMAL, allowNull: false },
	numb_rooms: { type: Sequelize.INTEGER, allowNull: false },
	avaliable: { type: Sequelize.BOOLEAN, allowNull: false }

})

//Se não exitir nenhuma tebela 'imoveis' será criado uma.
//Config: {force: true} para desligar as tentativas de criar a tabela sempre que este model for chamado
Imovel.sync({force: false}).then(() => {
	console.log({msn: "Tabela 'imoveis' foi criada"})
})

module.exports = Imovel