
const arrayHtml = (arr, listId) =>
	document.querySelector(`#${listId}`).innerHTML += arr
		.map(item => `<li>${item}</li>`)
		.join('');

arrayHtml(['someItem', 'otherItem'], 'mylistsid');
