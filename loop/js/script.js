const ul = document.querySelector('ul');

const fruits = ['apple', 'pear', 'kiwi', 'pineapple', 'banana', 'melon', 'orange'];

for(let i = 0; i<fruits.length; i++){
    let fruit = fruits[i];
    let li = `<li>${fruit}</li>`;

    ul.insertAdjacentHTML('beforeend', li);

}

// Hitta N i Arrayen
const findThis = 'pear';
for(let i = 0; i<fruits.length; i++){

    const fruit = fruits[i];
 
    if(fruit === findThis){
        // Found!
        console.log(`${findThis} found at index ${i}.`)
    }
}
