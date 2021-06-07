/*	
	Class encapsula operações de CRUD da tabela 'imoveis'
	Este arquivo define uma serie de metodos para manipulação da tabela 'imoveis'.
	Created by Santiago, L.C
*/

class DaoImovel{

	constructor(){
		this.ImovelModel = require('./ImovelModel')
	}

	//Cria um imovel
	addImovel(newImovel) {
		return this.ImovelModel.create(newImovel)
	}

	//Seleciona todos os imoveis cadastrados na tabela
	getAll(){
		return this.ImovelModel.findAll( {raw: true} )
	}

	//Seleciona imoveis cadastrados na tabela usando clausulas de consulta
	findOne(imovel){
		return this.ImovelModel.findAll({ where: imovel })
	}

	//Atualiza UM imovel da tabela com base em uma clausula
	updateOne(imovelUpdate, whereImovel){
		return this.ImovelModel.update( imovelUpdate, { where: whereImovel } );
	}

	//Atualiza TODOS (?) imoveis da tabela
	updateAll(imovelUpdate){
		return this.ImovelModel.update( imovelUpdate, { where: {} } );
	}

	//Exclui um imovel da tabela
	delete(whereImovel){
		return this.ImovelModel.destroy( { where: whereImovel } );
	}
}


module.exports = new DaoImovel()