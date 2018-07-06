class Util {
	constructor(moment) {
		this.moment = moment;
	}

	log(text) {
		console.log(this.moment().format('LTS') + ' | ' + text);
	}

	keys(object) {
		return Object.keys(object);
	}
}

module.exports = exports = Util;
