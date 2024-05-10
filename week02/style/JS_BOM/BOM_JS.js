const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
	if (input.value !=  ''){
		
	}else{
		
	}
	const li = document.createElement('li');
	const deletButton = document.createElement('button');
	li.textContent = input.value;
	deleteButton.textContent = '❌';
	li.append(deleteButton);
	list.append(li);
	deleteButton.addEventListener('click', function() {
		list.removeChild(li);
		input.focus();
	})
	input.value = '';
});