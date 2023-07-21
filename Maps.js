//Maps
// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

//using map to get object:AGE.
const funcGetAges = (person)=> person.age; //fuction for calling ages for efficiency

const age = people.map(funcGetAges);
 console.log(age);

 //using map to get name and age (constructing object since we're taking more than one)..........use *item* to access the following object needed to be accessed
 const newPeople = people.map((item) => {
 	return {
 		firstName: item.name,
 		oldAge: item.age + 20,
 	};
 	
 });
 console.log(newPeople);

 //DOM manipulation
 const names = people.map((person) => `<h2>${person.name}</h2>`); //declare variable names, assign the variable to contain a function that access the array "people" and print out the string
 const result = document.querySelector('#result'); //variable assigned to the id tag

 result.innerHTML = names.join (" ");
