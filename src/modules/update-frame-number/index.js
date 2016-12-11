export default (number) => {
	if ( number === 60 || number === undefined ) {
		return 1;
	}

	number++;

	return number;
};
