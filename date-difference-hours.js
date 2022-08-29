

const getHoursDate = (dateStart, dateEnd) => 
	(dateEnd - dateStart) / (1000 * 3600);

console.log(getHoursDate(new Date('2021-12-24'), new Date('2022-12-24')));
