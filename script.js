const inputFruit = document.querySelector('#fruit');
const listSuggestions = document.querySelector('.listSuggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const results = fruit.filter( fruitItem => (fruitItem.toLowerCase().includes(str)) );
	return results;
}

function searchHandler(event) {

	const inputValue = event.target.value.toLowerCase();

	if (inputValue !== ""){
		let results = search(inputValue);
		if (results.length === 0){
			inputFruit.value = "";
			listSuggestions.innerHTML = "";
		}
		else{
			showSuggestions(results, inputValue);
		}
	}	
}

function showSuggestions(results, inputVal) {

	listSuggestions.innerHTML = "";

	results.forEach( (result) => {

		const newLi = document.createElement('li');
		const indexVal = result.toLowerCase().indexOf(inputVal);

		const beforeSpan = document.createElement('span');
		beforeSpan.innerText = result.slice(0, indexVal);

		const boldSpan = document.createElement('span');
		boldSpan.classList.add('bold');
		boldSpan.innerText = result.slice(indexVal, indexVal + inputVal.length);

		const afterSpan = document.createElement('span');
		afterSpan.innerText = result.slice(indexVal + inputVal.length, result.length);

		newLi.append(beforeSpan, boldSpan, afterSpan);
		listSuggestions.appendChild(newLi);
	});
}

function useSuggestion(event) {
	let elementClick = event.target;

	if(elementClick.tagName === "LI"){
		inputFruit.value = event.target.innerText;
	}
	if(elementClick.tagName === "SPAN"){
		inputFruit.value = event.target.parentElement.innerText;
	}
	listSuggestions.innerHTML = "";
}

inputFruit.addEventListener('keyup', searchHandler);
listSuggestions.addEventListener('click', useSuggestion);