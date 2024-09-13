// import * as allData from '../data/list.js';
// import { data, text, sum } from '../data/list.js';

const ulDOM = document.querySelector('ul');

const data = [];

// ulDOM.textContent = 'Opapa!';

let HTML = '';

for (const item of data) {
    HTML += `<li>${item.id}) ${item.text}</li>`;
}

ulDOM.innerHTML = HTML;