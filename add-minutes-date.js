

const addMinutesDate = (date, n) => {
	const d = new Date(date);
	d.setTime(d.getTime() + n * 60000);
	return d.toISOString().split('.')[0].replace('T', ' ');
};

console.log(addMinutesDate('2022-08-19 18:16', 360));
