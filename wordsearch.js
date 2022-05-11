const transpose = require(`./transpose`);

const wordSearch = (letters, word) => {
	const horizontalJoin = letters.map((ls) => ls.join(""));

	for (l of horizontalJoin) {
		if (l.includes(word)) return true;
	}

	const transposed = transpose(letters);

	const verticalJoin = transposed.map((ls) => ls.join(""));

	for (l of verticalJoin) {
		if (l.includes(word)) return true;
	}

	return false;
};

module.exports = wordSearch;

