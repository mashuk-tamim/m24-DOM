//we will add an element to somewhere using appendChild

//1. where to add
const fruitList = document.getElementById('fruits-list');

//2. what to add
const li= document.createElement('li');
li.innerText='New fruit added by js';

//3. add it using appendChild
fruitList.appendChild(li);

/////////////////

const mainContainer= document.getElementById('main-container');
const section = document.createElement('section');
section.innerText='A new section added dynamically';
mainContainer.appendChild(section);