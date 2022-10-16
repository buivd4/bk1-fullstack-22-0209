var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var items = document.querySelectorAll('li');

// DELETE LIST ITEM AFTER CLICK ON BUTTON
function deleteItem(event) {
	if(event.target.tagName=='BUTTON') {
		event.target.parentElement.parentElement.removeChild(event.target.parentElement);
	}
}

//TOGGLES LIST ITEM
function toggleClass(item) {
	if (!item.classList.contains('done')) {
		item.classList.add('done');
	} else {
		item.classList.toggle('done');
	}
}

function strikethrough(event) {
	toggleClass(event.target);
}

// ADDS BUTTONS AND LIST ITEMS
function inputLength() {
	return input.value.length;
}

function addButton(li) {
	var delButton = document.createElement('button');
	delButton.appendChild(document.createTextNode('delete'));
	li.appendChild(delButton);
}

function addListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	addButton(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		addListElement();
	}
}

function addListAfterKeyPressed(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		addListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPressed);

ul.addEventListener('click', strikethrough);

ul.addEventListener('click', deleteItem);