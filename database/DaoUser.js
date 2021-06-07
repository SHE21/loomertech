/*	
	Class encapsula operações de CRUD da tabela 'users'
	Este arquivo define uma serie de metodos para manipulação da tabela 'users'.
	Created by Santiago, L.C
*/

class DaoUser{

	constructor(){
		this.UserModel = require('./UserModel')
	}

	//Cria um usuário
	addUser(newUser) {
		return this.UserModel.create(newUser)
	}

	//Selciona TODOS os usuários
	getAllUser(){
		return this.UserModel.findAll( {raw: true} )
	}

	//Seleciona UM usuário com base em uma clausula
	getOneUser(user){
		return this.UserModel.findOne({ where: user })
	}

	//Atualizada um usuário
	updateUser(userUpdate, whereUser){
		return this.UserModel.update( userUpdate, { where: whereUser } );
	}

	//Exclui um usuário
	deleteUser(whereUser){
		return this.UserModel.destroy( { where: whereUser } );
	}

}

module.exports = new DaoUser()