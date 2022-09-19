

function printThisAndData(...data) {
	console.log(this.data, ...data);
}

const obj = {data: 0};
const data = [1, 2, 3];

printThisAndData.call(obj, data);
printThisAndData.call(obj, ...data);
console.log("-----------------------------------------------------");
printThisAndData.apply(obj, data);
//printThisAndData.apply(obj, ...data);

printObjAndData = printThisAndData.bind(obj);

console.log("-----------------------------------------------------");
printObjAndData(data);
printObjAndData(...data);

const printTwoAndData = printThisAndData.bind(obj, 2);

console.log("-----------------------------------------------------");
printTwoAndData(data);
printTwoAndData(...data);

