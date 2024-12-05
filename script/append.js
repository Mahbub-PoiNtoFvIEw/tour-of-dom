// 1. where to add
const placeList = document.getElementById('places');
// 2. what to add
const li = document.createElement('li');
li.innerText = 'pahartoli';
// 3. add the child
placeList.appendChild(li);


const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'burger'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'pizza'
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'coconut d-light drink'
ul.appendChild(li4);

section.appendChild(h1);
section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>my Dress Section</h1>
<ul>
    <li>Shirt</li>
    <li>T-Shirt</li>
    <li>Jeans</li>
</ul>
`;
mainContainer.appendChild(sectionDress);