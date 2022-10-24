const suits = ['&clubs;', '&diams;', '&spades;', '&hearts;'];
const deck = [];

for(let i = 0; i<suits.length; i++){
    
    const suit = suits[i];

    for(let j = 2; j<=14; j++ ){
       deck.push(`${suit}  ${j}`);
    }
}

for(let i = 0; i<deck.length; i++){
    let el = `<li>${deck[i]}</li>`;
    let ul = document.querySelector('ul')
    ul.insertAdjacentHTML('beforeend', el)
}

document.querySelector('button').addEventListener('click', () => {

    // Slumpa random position i arrayen
    const randPos = Math.floor(Math.random()*deck.length);

    // Plocka ut ett kort på position N ( randPos )
    const card = deck.splice(randPos, 1);

    document.querySelector('p').innerHTML = `Du tog ${card[0]}.`

    let ul = document.querySelector('ul')
    ul.innerHTML = '';
    
    for(let i = 0; i<deck.length; i++){
        let el = `<li>${deck[i]}</li>`;
        ul.insertAdjacentHTML('beforeend', el)
    }
})

