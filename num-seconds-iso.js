

const isoSeconds = s => {
	const [hour, minute, second, sign] =
		s > 0
		? [s / 3600, (s / 60) % 60, s % 60, '']
		: [-s / 3600, (-s / 60) % 60, -s % 60, '-'];
	return (
		sign + 
		[hour, minute, second]
		.map(v => `${Math.floor(v)}`.padStart(2, '0'))
		.join(':')
	);
};

console.log(isoSeconds(2000));
