

const getMonthsDifference = (dateStart, dateEnd) => 
	Math.max(
		(dateEnd.getFullYear() - dateStart.getFullYear()) * 12 +
		dateEnd.getMonth() - 
		dateStart.getMonth(),
		0
	);

console.log(getMonthsDifference(new Date('2022-12-24'), new Date('2023-07-13')));
