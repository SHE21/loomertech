/*	
	Arquivo de criação e configuração de acesso à rotas do dominio Imóvel
	Created by Santiago, L.C
*/

//Carregamento de Modulos
const imovelModel = require('../database/DaoImovel')
const token = require('../middleware/Token')
const idRand = require('../util/IdRandom')
const msn = require('../util/Message')
const express = require('express')
const router = express.Router()

/*
	Cadastra um imóvel na tabela 'imoveis'.
	Rota: /imovel/put/ Method: POST Access: PRIVATE
*/
router.post('/put', token.get, (req, res) => {

	//Obtem dados da requisição, já populando o objeto
	const newImovel = {
		idMask: idRand.get(),
		cep: req.body.cep,
		number: req.body.number,
		complement: req.body.complement,
		rent_amount: req.body.rent_amount,
		numb_rooms: req.body.numb_rooms,
		avaliable: req.body.avaliable
	}

	//Cadastra um imóvel na tabela 'imoveis'
	imovelModel.addImovel(newImovel).then( result => {

		if ( result != null ) {
			//Imóvel cadastrado com sucesso
			res.send( { message: msn.ok_imovel_register() } )

		}else{
			//Ocorreu um erro. Tenta mais tarde.
			res.send( { message: msn.error_try_later()} )
		}
	})

})

/*
	Retorna todos os registros da tabela 'imoveis'.
	Rota: /imovel/get/ Method: GET Access: PRIVATE
*/
router.get('/get', token.get, (req, res) =>{

	//Retorna todos os imoveis da table 'imoveis'
	imovelModel.getAll().then( result => {
		res.json(result)
	})

})

/*
	Retorna registros da tabela 'imoveis' pelo cep.
	Resulta em todos os imoveis que tenham em comum um cep.
	Rota: /imovel/get/cep/65290000 Method: GET Access: PRIVATE
*/
router.get('/get/cep/:cep', token.get, (req, res) => {

	//Popula dados da requisição
	const imovel = {
		cep: req.params.cep
	}

	//Consulta tabela 'imoveis' 
	imovelModel.findOne(imovel).then( result => {
		res.send(result)
	})
	
})

/*
	Retorna registros da tabela 'imoveis' pelo numero de quartos.
	Resulta em todos os imoveis com numero x de quartos.
	Rota: /imovel/get/rooms/3 Method: GET Access: PRIVATE
*/
router.get('/get/rooms/:rooms', token.get, (req, res) =>{

	const imovel = {
		numb_rooms: req.params.rooms
	}

	imovelModel.findOne(imovel).then( result => {
		res.send(result)
	})
	
})


/*
	Retorna um registro da tabela 'imoveis' pelo campo 'avaliable'.
	Resulta em todos os imoveis DISPONIVEIS ou INDISPONIVEIS. 
	Rota: /imovel/get/avaliable/1 Method: GET Access: PRIVATE
*/
router.get('/get/avaliable/:avaliable', token.get, ( req, res ) =>{

	const imovel = {
		avaliable: req.params.avaliable
	}

	imovelModel.findOne(imovel).then( result => {
		res.send(result)
	})
	
})

/*
	Atualizar um registro da tabela 'imoveis' pelo campo idMask
	Rota: /imovel/update/id Method: GET Access: PRIVATE
*/
router.post('/update/:id', token.get, ( req, res ) => {

	const where = {
		idMask: req.params.id
	}

	const imovel = {
		cep: req.body.cep,
		number: req.body.number,
		complement: req.body.complement,
		rent_amount: req.body.rent_amount,
		numb_rooms: req.body.numb_rooms,
		avaliable: req.body.avaliable
	}

	imovelModel.updateOne(imovel, where).then( result => {

		if ( result != null ) {
			//Imóvel atualizado com sucesso
			res.send( { message: msn.ok_update() } )

		}else{
			//Ocorreu um erro. Tenta mais tarde.
			res.send( { message: msn.error_try_later() } )
		}
	})
})


/*	################ DANGEROUS ROUTE ################################################
	Atualizar todos os registros da tabela 'imoveis' sem NEHUMA CLAUSULA (CUIDADO!!!)
	Rota: /imovel/update/all Method: POST Access: PRIVATE
	################ DANGEROUS ROUT ################################################
*/
router.post('/update/all', token.get, (req, res) => {

	const imovel = {
		cep: req.body.cep,
		number: req.body.number,
		complement: req.body.complement,
		rent_amount: req.body.rent_amount,
		numb_rooms: req.body.numb_rooms,
		avaliable: req.body.avaliable
	}

	imovelModel.updateAll(imovel).then( result => {

		if ( result != null ) {
			//Imóveis atualizado com sucesso
			res.send( { message: msn.ok_update() } )

		}else{
			//Ocorreu um erro. Tenta mais tarde.
			res.send( { message: msn.error_try_later() } )
		}

	})
})

module.exports = router