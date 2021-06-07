/*	
	Class usada para encapsular e padronizar as mensagens de comunicação do sistema
	para com o usuário.
	Created by Santiago, L.C
*/
class Message{

	static error_route_401(){
		const msn = "Ação não permitida. Usuário não logado. TOKEN"
		return msn
	}

	static ok_route_200(){
		const msn = "Ação não permitida. Usuário não logado. TOKEN"
		return msn
	}

	static ok_user_register(){
		const msn = 'Usuário cadastrado com sucesso.'
		return msn
	}

	static error_try_later(){
		const msn = 'Ocorreu um erro. Tenta mais tarde.'
		return msn
	}

	static error_user_login(){
		const msn = 'Senha ou email incorretos!'
		return msn
	}

	static ok_user_login(){
		const msn = 'Usuário logado'
		return msn
	}

	static ok_update(){
		const msn = 'Registro atualizado com sucesso!'
		return msn
	}

	static ok_imovel_register(){
		const msn = 'Imóvel cadastrado com sucesso!'
		return msn
	}

	static ok_server(){
		const msn = 'Conectado so Servidor'
		return msn
	}

	static error_server(){
		const msn = 'Erro ao conectar ao Servidor'
		return msn
	}
}

module.exports = Message