materials = [
	"Hydrogen",
	"Helium",
	"Lithium",
	"Carbon",
]

materialsLength = materials.map(material => material.length)
console.log(materialsLength);

function defer(f, ms) {
	return function() {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}

const showElements = element => {
	console.log(`${element}`);
};

let showElementsDeferred = defer(showElements, 2000);
showElementsDeferred(materialsLength);
