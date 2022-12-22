const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const liElement = document.createElement('li');
  liElement.textContent = option;
  liElement.classList.add('item');
  return liElement;
});

ingredientsContainer.append(...elements);
