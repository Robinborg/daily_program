

const fs = require('fs');

const JSONFile = (obj, filename) => {
	fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
};

JSONFile({test: "test passed" }, "testJSONFile");
