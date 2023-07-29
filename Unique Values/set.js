// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

//A program to get the instances of the category property, narrow the instances to avoid repeated values and using DOM manipulation to push the values in button form onto the webpage

//instances of the category property
const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('.result');

result.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');