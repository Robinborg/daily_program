

const dayDifferenceDate = (dateStart, dateEnd) => 
	(dateEnd - dateStart) / (1000 * 3600 * 24);


console.log(dayDifferenceDate(new Date('2020-12-31'), new Date('2022-12-31')));
