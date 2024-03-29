

const nest = (items, id = null, link = 'parent_id') =>
	items
		.filter(item => item[link] === id)
		.map(item => ({...item, children: nest(items, item.id, link) }));

const comments = [
	{id: 1, parent_id: null},
	{id: 2, parent_id: 1},
	{id: 3, parent_id: 2},
	{id: 4, parent_id: 3},
	{id: 5, parent_id: 4},
];

const nestedComments = nest(comments);

console.log(nestedComments);
console.log(JSON.stringify(nestedComments));
