class Util {
	constructor(moment) {
		this.moment = moment;
	}

	log(text) {
		console.log(this.moment().format('LTS') + ' | ' + text);
	}
}

module.exports = exports = Util;
