
/*	
	Configurações de persistência
	Banco de Dados MySql
	Database: loomertech
	CREATED BY Santiago, LC
*/

//Configure aqui a conexão com o banco de dados
const config = {
	database: 'loomertech',
	user: 'root',
	password: '',
	host: 'localhost',
	dialect: 'mysql'
}

const Sequelize = require('sequelize')

//Estabelece uma conexão com banco de dados
const connection = new Sequelize(config.database, config.user, config.password, {
	 host: config.host,
	 dialect: config.dialect
})

connection.authenticate().then( () => {
	//Se a conexão for um sucesso
	console.log({msn: 'Banco de dados Conectado'})

}).catch( ( msgErro ) => {
	//Se houver erro na conexão
	console.log({msn: 'Falha na conexão com Banco de dados'})

})

module.exports = connection