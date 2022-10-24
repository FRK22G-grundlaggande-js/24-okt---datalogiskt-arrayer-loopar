/*
const cart = [];

console.log(cart)

// Lägg till saker i array
cart.push('banan'); // Lägger till en item i SLUTET av arrayen
cart.push('kiwi')
cart.push('äpple')
console.log(cart)

//const lastFruit = cart.pop();
cart[3] = 'päron';
cart.push('skruvmejsel')
console.log(`Du har ${cart.length} saker i din array`);
*/
const list = [];

document.querySelector('button').addEventListener('click', () => {
    
    // hämta värdet i input-fältet
    let inputValue = document.querySelector('input').value;

    // lägg in värdet i arayyen
    list.push(inputValue);

    const ul = document.querySelector('ul')
    ul.innerHTML = ''; // Ersätt allt inuti UL med tom sträng = tar bort alla li:s

    // Loopa ut arrayen i HTML
    list.forEach((text) => {

        // Skapa en li-tagg + val som innerText
        const li = `<li>${text}</li>`;

        // Putta ut en den i vår UL
        ul.insertAdjacentHTML('beforeend', li)

    })

    document.querySelector('input').value = '';    
})

document.querySelector('input').addEventListener('keyup', (e) =>{
    if(e.key === 'Enter'){
        const inputValue = e.target.value; // Värdet av inputfältet vi klickade enter i
        list.push(inputValue);

        const ul = document.querySelector('ul')
        ul.innerHTML = ''; // Ersätt allt inuti UL med tom sträng = tar bort alla li:s
        list.forEach((text) => {
            const li = `<li>${text}</li>`;
            ul.insertAdjacentHTML('beforeend', li)
        })
        e.target.value = '';
    }
})