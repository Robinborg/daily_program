

const fs = require('fs');

const createDir = dir => 
	!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;

createDir("testing-directory");
