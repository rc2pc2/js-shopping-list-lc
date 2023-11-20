// Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.

const shoppingList = [
    'pane',
    'ricotta',
    'latte',
    'guanciale',
    'ovetto kinder',
    'gamberetti',
    'uova',
    'biscottex',
    'pasta',
    'salsa di pomodoro senza nichel',
    'cous cous',
    'baklava',
    'cannolo',
    'ramen',
    'mela',
    'cioccolato',
    'mazza di bamboo'
];

const ulListElement = document.querySelector('#items-container');
// console.log(ulListElement);

// for (let index = 0; index < shoppingList.length; index++) {
//     console.log(shoppingList[index]);
// }

let index = 0;
while( index < shoppingList.length){

    // ? creare un li
    const listItemElement = document.createElement('li');

    // ? popolarlo come voglio
    listItemElement.classList.add('list-element');
    listItemElement.append(shoppingList[index]);

    // ? lo aggiungo al parent
    ulListElement.appendChild(listItemElement);

    index++;
}



// let index = 0;
// while( index < shoppingList.length){

//     ulListElement.innerHTML +=
//     `<li class="item-list">
//         ${shoppingList[index]}
//     </li>`;

//     index++;
// }

