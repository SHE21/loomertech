class Auth{
	static middle(req, res, next){
		if (req.session.user != null) {
			next()

		}else{
			res.json({message: 'Ação não permitida. Usuário não logado.'})
		}
	}
}

module.exports = Auth