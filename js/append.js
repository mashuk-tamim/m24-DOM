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

const h3= document.createElement('h3');
h3.innerText='This is heading one';
section.appendChild(h3);

const ul= document.createElement('ul');
section.appendChild(ul);

const li1= document.createElement('li');
li1.innerText='This is list one';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText='This is list two';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText='This is list three';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);


//new section

const sectionDress = document.createElement('section');

sectionDress.innerHTML=`
<h1>Dress collection</h1>
<ul>
    <li>Dress 1</li>
    <li>Dress 2</li>
    <li>Dress 3</li>
`

mainContainer.appendChild(sectionDress);