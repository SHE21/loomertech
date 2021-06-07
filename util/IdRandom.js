class IdRandom{

	static get(){
		const random = require('random-key-generator')
		return random.getRandom(15,'id','u','front')
	}
}

module.exports = IdRandom