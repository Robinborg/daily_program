

const colonTime = date => date.toTimeString().slice(0, 8);

console.log(colonTime(new Date()));
