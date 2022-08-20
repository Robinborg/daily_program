

const getTimeStamp = (date = new Date()) => Math.floor(date.getTime() / 1000);

console.log(getTimeStamp());
