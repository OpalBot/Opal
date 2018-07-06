/**
 * Utilities
 */
class Util {
	/**
	 * Utilities
	 * @param {Moment} moment import moment class
	 */
	constructor(moment) {
		this.moment = moment;
	}

	/**
	 * Print to console with timestamp
	 * @param {string} text text to print
	 */
	log(text) {
		console.log(this.moment().format('LTS') + ' | ' + text);
	}

	/**
	 * Get keys of object
	 * @param {object} object object
	 */
	keys(object) {
		return Object.keys(object);
	}
}

module.exports = exports = Util;
